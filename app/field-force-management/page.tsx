import { Metadata } from 'next';
import FieldForceManagementPage from '@/components/pages/field-force-management-page';

export const metadata: Metadata = {
  title: 'Field Force Management Solutions - WebEarl',
  description: 'Comprehensive field force management solutions by WebEarl Technologies. Optimize your mobile workforce with real-time tracking, task management, and data-driven insights for improved productivity and customer service.',
};

export default function FieldForceManagement() {
  return <FieldForceManagementPage />;
}
