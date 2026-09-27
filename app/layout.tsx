import type {Metadata, Viewport} from 'next';
import { Space_Grotesk, Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Nexor — AI Voice Agent for Inbound Calls',
  description: '24/7 AI voice agent built for HVAC, roofing, plumbing, and local service businesses. Captures every missed call, qualifies leads, schedules appointments, and syncs directly with CRM.',
  openGraph: {
    title: 'Nexor — AI Voice Agent for Inbound Calls',
    description: '24/7 AI voice agent built for HVAC, roofing, plumbing, and local service businesses. Captures every missed call, qualifies leads, schedules appointments, and syncs directly with CRM.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nexor — AI Voice Agent for Inbound Calls',
    description: '24/7 AI voice agent built for HVAC, roofing, plumbing, and local service businesses. Captures every missed call, qualifies leads, schedules appointments, and syncs directly with CRM.',
  },
};

export const viewport: Viewport = {
  themeColor: '#0b0f12',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${plusJakartaSans.variable} scroll-smooth`}>
      <body className="bg-[#0c1013] text-[#e8edf2] font-sans antialiased selection:bg-teal-500/20 selection:text-teal-200" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
