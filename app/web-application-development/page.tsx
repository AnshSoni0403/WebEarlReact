import { Metadata } from 'next';
import WebApplicationDevelopmentPage from '@/components/pages/web-application-development-page';

export const metadata: Metadata = {
  title: 'Web Application Development - WebEarl',
  description: 'Professional web application development services by WebEarl Technologies. We create responsive, scalable, and high-performance web applications tailored to your business needs.',
};

export default function WebApplicationDevelopment() {
  return <WebApplicationDevelopmentPage />;
}
