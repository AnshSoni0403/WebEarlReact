import type { Metadata } from 'next'
import ChatIcons from '@/components/common/ChatIcons'
import Preloader from '@/components/common/Preloader'
import '../styles/all.css'
import '../styles/css/bootstrap.min.css'
import '../styles/css/aos.min.css'
import '../styles/css/magnific-popup.min.css'
import '../styles/css/meanmenu.css'
import '../styles/css/responsive.css'
import '../styles/css/slick.css'
import QuoteButton from '@/components/common/QuoteButton'


export const metadata: Metadata = {
  title: 'Ansh Krish Clone',
  description: 'WebEarl Technologies Pvt Ltd',
  generator: 'v0.dev',
}



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>
        <Preloader />
        {children}
        <ChatIcons />
        <QuoteButton/>
      </body>
    </html>
  )
}
