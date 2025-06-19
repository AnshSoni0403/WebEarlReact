import { Metadata } from 'next';
import MobileApplicationDevelopmentPage from '@/components/pages/mobile-application-development-page';

export const metadata: Metadata = {
  title: 'Mobile Application Development - WebEarl',
  description: 'Professional mobile application development services by WebEarl Technologies. We create high-quality, performant, and secure mobile apps for Android and iOS platforms using native and cross-platform technologies.',
};

export default function MobileApplicationDevelopment() {
  return <MobileApplicationDevelopmentPage />;
}
