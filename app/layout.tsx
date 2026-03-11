import type { Metadata } from 'next';
import Script from 'next/script';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Analytics } from "@vercel/analytics/next"

const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://srivariscaffoldingworks.com'),
  title: {
    default: 'Sri Vari Scaffolding Works | Professional Scaffolding Services in Chennai',
    template: '%s | Sri Vari Scaffolding Works',
  },
  description:
    'Sri Vari Scaffolding Works – Expert scaffolding solutions including wheel ladders, single scaffolding, and double scaffolding. Trusted by construction professionals across Tamil Nadu. Contact Saravanan: 8681995581.',
  keywords: [
    'scaffolding works Chennai',
    'scaffolding company Tamil Nadu',
    'wheel ladder scaffolding',
    'single scaffolding',
    'double scaffolding',
    'construction scaffolding',
    'scaffolding contractor Chennai',
    'Sri Vari Scaffolding',
    'Saravanan scaffolding',
    'industrial scaffolding Tamil Nadu',
    'scaffolding rental Chennai',
    'scaffolding services India',
  ],
  authors: [{ name: 'Sri Vari Scaffolding Works' }],
  creator: 'Sri Vari Scaffolding Works',
  publisher: 'Sri Vari Scaffolding Works',
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: process.env.NEXT_PUBLIC_SITE_URL || 'https://srivariscaffolding.com',
    siteName: 'Sri Vari Scaffolding Works',
    title: 'Sri Vari Scaffolding Works | Professional Scaffolding Services',
    description:
      'Expert scaffolding solutions – wheel ladders, single & double scaffolding. Trusted across Tamil Nadu. Call 8681995581.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Sri Vari Scaffolding Works',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sri Vari Scaffolding Works | Professional Scaffolding Services',
    description:
      'Expert scaffolding solutions across Tamil Nadu. Call 8681995581.',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: process.env.NEXT_PUBLIC_SITE_URL || 'https://srivariscaffoldingworks.com',
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || '',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Barlow:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <meta name="theme-color" content="#0A0A0A" />
        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'LocalBusiness',
              name: 'Sri Vari Scaffolding Works',
              description:
                'Professional scaffolding services including wheel ladders, single and double scaffolding across Tamil Nadu, India.',
              url: process.env.NEXT_PUBLIC_SITE_URL || 'https://srivariscaffolding.com',
              telephone: ['+918681995581', '+919840481409'],
              email: 'sriscaffholding@gmail.com',
              founder: { '@type': 'Person', name: 'Saravanan' },
              address: {
                '@type': 'PostalAddress',
                addressLocality: 'Chennai',
                addressRegion: 'Tamil Nadu',
                addressCountry: 'IN',
              },
              geo: {
                '@type': 'GeoCoordinates',
                latitude: '13.0827',
                longitude: '80.2707',
              },
              openingHoursSpecification: {
                '@type': 'OpeningHoursSpecification',
                dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
                opens: '08:00',
                closes: '20:00',
              },
              sameAs: ['https://wa.me/918681995581'],
              serviceType: ['Scaffolding', 'Construction Support', 'Industrial Scaffolding'],
            }),
          }}
        />
      </head>
      <body className="bg-dark-900 text-white font-body">
        {/* Google Analytics */}
        {GA_ID && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
              strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${GA_ID}', {
                  page_path: window.location.pathname,
                });
              `}
            </Script>
          </>
        )}
        <Navbar />
        <main>{children}</main>
        <Analytics />
        <Footer />
      </body>
    </html>
  );
}
