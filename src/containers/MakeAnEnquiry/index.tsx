import Style from '@/scss/pages/make-an-enquire/index.scss';
import Banner from './Banner';
import { MakeAnEnquiryForm } from './MakeAnEnquiryForm';

export default function MakeAnEnquiry() {
  return (
    <main>
      <style jsx>{Style}</style>
      <Banner />
      <MakeAnEnquiryForm />
    </main>
  );
}
