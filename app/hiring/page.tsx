import { Metadata } from 'next';
import HiringPage from '@/components/pages/hiring';

export const metadata: Metadata = {
  title: 'Hiring - WebEarl',
  description: 'Get in touch with WebEarl Technologies. We\'d love to hear from you!',
};

export default function Hiring() {
  return <HiringPage />;
}