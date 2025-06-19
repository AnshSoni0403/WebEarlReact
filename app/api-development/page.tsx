import { Metadata } from 'next';
import ApiDevelopmentPage from '@/components/pages/api-development-page';

export const metadata: Metadata = {
  title: 'API Development Services - WebEarl',
  description: 'Professional API development services by WebEarl Technologies. We build secure, scalable, and efficient RESTful and GraphQL APIs to power your digital ecosystem and enable seamless system integration.',
};

export default function ApiDevelopment() {
  return <ApiDevelopmentPage />;
}
