import Breadcrumb from '@components/primitive/Breadcrumb';
import styles from '@scss/pages/contact-us/banner.scss?type=scoped';
import { useRouter } from 'next/router';

export default function Banner() {
  const router = useRouter();
  const customName = router.asPath
    .split('/')
    .map((item) => item.charAt(0).toUpperCase() + item.slice(1))
    .join(' ');
  const customNames = customName
    .split('-')
    .map((item) => item.charAt(0).toUpperCase() + item.slice(1))
    .join(' ');
  return (
    <>
      <style jsx>{styles}</style>
      <section className="ibc-banner">
        <div className="ibc-container-content">
          <div className="ibc-banner_title">
            <h1>{customNames}</h1>
          </div>
          <div className="ibc-banner_link">
            <div className="ibc-services__breadcrumb">
              <Breadcrumb></Breadcrumb>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
