import type { Metadata, Viewport } from 'next'
import { Poppins, Libre_Baskerville } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-poppins',
})

const libreBaskerville = Libre_Baskerville({
  subsets: ['latin'],
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  display: 'swap',
  variable: '--font-libre',
})

export const metadata: Metadata = {
  title: 'Harlow Realty | Premium Real Estate in Toronto & GTA',
  description:
    'Discover your dream home with Harlow Realty. Premium real estate services in Toronto and the Greater Toronto Area. Expert agents, luxury properties, and personalized service.',
  generator: 'v0.app',
  keywords: [
    'Toronto real estate',
    'GTA homes',
    'luxury properties',
    'real estate agents',
    'Harlow Realty',
    'buy home Toronto',
    'sell home Toronto',
  ],
  authors: [{ name: 'Harlow Realty' }],
  creator: 'Harlow Realty',
  publisher: 'Harlow Realty',
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: 'Harlow Realty | Premium Real Estate in Toronto & GTA',
    description:
      'Discover your dream home with Harlow Realty. Premium real estate services in Toronto and the Greater Toronto Area.',
    url: 'https://harlowrealty.ca',
    siteName: 'Harlow Realty',
    locale: 'en_CA',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Harlow Realty | Premium Real Estate in Toronto & GTA',
    description:
      'Discover your dream home with Harlow Realty. Premium real estate services in Toronto and the Greater Toronto Area.',
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  themeColor: '#043222',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${poppins.variable} ${libreBaskerville.variable}`}>
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
