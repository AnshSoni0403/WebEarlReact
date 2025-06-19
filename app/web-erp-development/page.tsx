import { Metadata } from 'next';
import WebErpDevelopmentPage from '@/components/pages/web-erp-development-page';

export const metadata: Metadata = {
  title: 'Web ERP Development Services - WebEarl',
  description: 'Custom Web ERP development services by WebEarl Technologies. We build comprehensive enterprise resource planning solutions to streamline your business operations and improve efficiency.',
};

export default function WebErpDevelopment() {
  return <WebErpDevelopmentPage />;
}
