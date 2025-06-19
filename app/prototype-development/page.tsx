import { Metadata } from 'next';
import PrototypeDevelopmentPage from '@/components/pages/prototype-development-page';

export const metadata: Metadata = {
  title: 'Prototype Development Services - WebEarl',
  description: 'Professional prototype development services by WebEarl Technologies. Transform your ideas into interactive prototypes to validate concepts, gather feedback, and secure stakeholder buy-in before full-scale development.',
};

export default function PrototypeDevelopment() {
  return <PrototypeDevelopmentPage />;
}
