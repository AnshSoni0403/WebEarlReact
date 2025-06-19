import { Metadata } from 'next';
import CrmDevelopmentPage from '@/components/pages/crm-development-page';

export const metadata: Metadata = {
  title: 'CRM Development Services - WebEarl',
  description: 'Custom CRM development services by WebEarl Technologies. We build tailored CRM solutions to help businesses manage customer relationships, streamline sales processes, and improve customer satisfaction.',
};

export default function CrmDevelopment() {
  return <CrmDevelopmentPage />;
}
