import { Metadata } from 'next';
import DigitalMarketingPage from '@/components/pages/digital-marketing-page';

export const metadata: Metadata = {
  title: 'Digital Marketing Services - WebEarl',
  description: 'Professional digital marketing services by WebEarl Technologies. We offer comprehensive digital marketing solutions including SEO, PPC, social media marketing, and content marketing to help your business grow online.',
};

export default function DigitalMarketing() {
  return <DigitalMarketingPage />;
}
