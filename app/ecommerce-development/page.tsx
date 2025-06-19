import { Metadata } from 'next';
import EcommerceDevelopmentPage from '@/components/pages/ecommerce-development-page';

export const metadata: Metadata = {
  title: 'E-Commerce Development - WebEarl',
  description: 'Professional e-commerce development services by WebEarl Technologies. We create custom, scalable, and secure e-commerce solutions to help businesses grow their online presence and increase sales.',
};

export default function EcommerceDevelopment() {
  return <EcommerceDevelopmentPage />;
}
