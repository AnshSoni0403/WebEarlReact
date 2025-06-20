import { Metadata } from 'next';
import QuotationPage from '@/components/pages/QuotationPage';

export const metadata: Metadata = {
  title: 'Quotation Services - WebEarl',
  description: 'Custom Quotation services by WebEarl Technologies. We build tailored Quotation solutions to help businesses manage customer relationships, streamline sales processes, and improve customer satisfaction.',
};

export default function Quotation() {
  return <QuotationPage />;
}
