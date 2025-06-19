import { Metadata } from 'next';
import ContactPage from '@/components/pages/contact-page';

export const metadata: Metadata = {
  title: 'Contact - WebEarl',
  description: 'Get in touch with WebEarl Technologies. We\'d love to hear from you!',
};

export default function Contact() {
  return <ContactPage />;
}
