// import { DefaultImages } from '@utils/constants';
import classnames from 'classnames';
import { FC, useEffect, useState } from 'react';
import styles from '@scss/components/next-image.scss?type=scoped';

interface IProps {
  src: string;
  objectFit?: 'cover' | 'contain';
  alt?: string;
  className?: string;
}

const defaultProps = {
  alt: 'ibc-img',
  className: '',
};

const NextImage: FC<IProps> = ({ src, alt, className, objectFit, ...props }) => {
  const [isError, setError] = useState(false);

  useEffect(() => {
    if (!src) {
      setError(true);
    } else {
      const newImg = new Image();
      newImg.src = src;
      newImg.onerror = () => {
        setError(true);
      };
    }
  }, [src]);

  return (
    <div className={classnames('ibc-image', { 'ibc-image--error': isError })}>
      <style jsx>{styles}</style>
      <img
        src={!isError ? src : 'DefaultImages.ERROR_IMAGE'}
        alt={alt}
        className={className}
        style={{ objectFit: isError ? 'cover' : objectFit }}
        {...props}
      />
    </div>
  );
};

NextImage.defaultProps = defaultProps;

export default NextImage;
