import { Metadata } from 'next';
import InternshipPage from '@/components/pages/internship-page';

export const metadata: Metadata = {
  title: 'Internship & Training Program - WebEarl',
  description: 'Join our internship and training program to gain hands-on experience in web and mobile application development. Learn from industry experts and kickstart your tech career with WebEarl Technologies.',
};

export default function Internship() {
  return <InternshipPage />;
}
