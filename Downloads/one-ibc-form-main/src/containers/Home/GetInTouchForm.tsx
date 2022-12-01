import { IGetInTouch } from '@/models';
import { createGetInTouchSchema } from '@/validations';
import { GroupFromInput } from '@components/compound';
import GroupPhoneNumber from '@components/compound/GroupFormControls/PhoneNumber';
import { yupResolver } from '@hookform/resolvers/yup';
import { useGoogleCaptcha } from '@hooks/useGoogleCaptcha';
import { usePhoneValidation } from '@hooks/usePhoneValidation';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

interface GetInTouchFormProps {
  onSubmit: (value: any) => void;
}

export default function GetInTouchForm({ onSubmit }: GetInTouchFormProps) {
  const [isPhone, setIsPhone] = useState(false);
  const [phoneCountryCode, setPhoneCountryCode] = useState(null);
  const validatePhone = usePhoneValidation();
  const { handleSubmitData, valid: googleCaptchaIsValid } = useGoogleCaptcha();

  const form = useForm<IGetInTouch>({
    defaultValues: {
      email: '',
      name: '',
      phone: 0,
      enquiry: '',
    },
    resolver: yupResolver(
      createGetInTouchSchema({
        email: 'Please enter email',
        name: 'Please enter name',
        enquiry: 'Please enter subject',
        phone: 'Phone number is required',
      }),
    ),
  });

  const handleSubmit = async (values: IGetInTouch) => {
    await handleSubmitData();
    if (!googleCaptchaIsValid) return;
    if (!isPhone) {
      form.setError('phone', { type: 'custom', message: 'Phone number is invalid' });
      return;
    }
    onSubmit({
      ...values,
      country_code: phoneCountryCode,
    });
  };

  const handlePhoneChange = (phoneNumber, country, phoneCode) => {
    const { isValid } = validatePhone(phoneNumber, country);
    setIsPhone(!!isValid);
    setPhoneCountryCode(phoneCode);
  };

  return (
    <div className="">
      <form onSubmit={form.handleSubmit(handleSubmit)} className="ibc-touch-form ibc__form__box">
        <GroupFromInput
          placeholder="Name"
          form={form}
          name="name"
          formLabel="Full name"
          iconAfter={<i className="fas fa-user"></i>}
        />
        <GroupFromInput
          placeholder="Email"
          form={form}
          name="email"
          formLabel="Email"
          iconAfter={<i className="fas fa-envelope"></i>}
        />
        <GroupFromInput
          placeholder="Your Enquiry"
          form={form}
          name="enquiry"
          formLabel="Your Enquiry"
        />
        <GroupPhoneNumber form={form} name="phone" onValueChange={handlePhoneChange} />
        <div className=" ibc__form__box__button">
          <button onClick={form.handleSubmit(handleSubmit)}>Submit</button>
        </div>
      </form>
    </div>
  );
}
