import Style from '@/scss/pages/contact-us/index.scss';
import { Address } from './Address';
import { ContactForm } from './ContactForm';
import MapContact from './MapContact';

export default function ContactUS() {
  return (
    <main>
      <style jsx>{Style}</style>

      <ContactForm />
      <Address />
      <MapContact></MapContact>
    </main>
  );
}
