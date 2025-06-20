import { Metadata } from 'next';
import CareerPage from '@/components/pages/career-page';

export const metadata: Metadata = {
  title: 'Career - WebEarl',
  description: 'Get in touch with WebEarl Technologies. We\'d love to hear from you!',
};

export default function Career() {
  return <CareerPage />;
}