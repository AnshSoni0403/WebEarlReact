import { Metadata } from 'next';
import GameDevelopmentPage from '@/components/pages/game-development';

export const metadata: Metadata = {
  title: 'Game Development Solutions - WebEarl',
  description: 'Comprehensive field force management solutions by WebEarl Technologies. Optimize your mobile workforce with real-time tracking, task management, and data-driven insights for improved productivity and customer service.',
};

export default function GameDevelopment() {
  return <GameDevelopmentPage />;
}
