import styles from '@scss/components/form-input.scss';
import classNames from 'classnames';
import { ReactNode } from 'react';
import { Controller, UseFormReturn } from 'react-hook-form';

export interface InputUploadProps {
  placeholder: string;
  form: UseFormReturn<any>;
  name: any;
  className?: string;
  formLabel?: string;
  iconAfter?: ReactNode;
  iconBefore?: ReactNode;
  type?: string;
  limit?: number;
}
export default function GroupFromInputUpload(props: InputUploadProps) {
  const { placeholder, form, name, className, formLabel, iconAfter, iconBefore, limit } = props;
  const {
    formState: { errors },
  } = form;

  const hasError: any = errors[name];
  const reDefineUploadValue = (files) => {
    let result = [];
    Array.from(files)?.map((file: File) => {
      if (file.size > limit) {
        alert('File is too big!');
        result = []
        return result
      }
      getBase64(file, (resultImage) => {
        result.push({
          fileType: file.type,
          fileName: file.name,
          fileSize: file.size,
          fileContent: resultImage,
        });
      });
    });
    return result;
  };
  const getBase64 = (file, cb) => {
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function () {
      cb(reader.result);
    };
    reader.onerror = function (error) {
      cb('');
    };
  };
  return (
    <>
      <style jsx>{styles}</style>
      <Controller
        name={name}
        control={form.control}
        render={({ field: { onChange, onBlur, value } }) => (
          <div className="ibc-input-form">
            <div className={classNames('ibc-input-form__container', className)}>
              {!!formLabel && (
                <div className="ibc-input-form__label">
                  <span>{formLabel}</span>
                </div>
              )}
              <div className="ibc-input-form__main">
                {!!iconBefore && <span>{iconBefore}</span>}
                <input
                  type="file"
                  className={classNames('ibc-input', { 'ibc-input--error': hasError?.message })}
                  placeholder={placeholder}
                  onBlur={onBlur}
                  onChange={(val) => onChange(reDefineUploadValue(val?.target?.files))}
                  multiple
                />
                {!!iconAfter && <span>{iconAfter}</span>}
              </div>
            </div>
            {hasError?.message && (
              <span className="ibc-form-input__error-text">{hasError?.message}</span>
            )}
          </div>
        )}
      />
    </>
  );
}
