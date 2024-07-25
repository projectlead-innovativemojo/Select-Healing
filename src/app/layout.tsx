import type { Metadata } from "next";
import { Inter, Montserrat,Libre_Baskerville,Poppins } from "next/font/google";
import Head from 'next/head';
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

const monts = Montserrat({
  subsets: ["latin"],
  variable: "--font-monts",
});
const libre = Libre_Baskerville({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-libre",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400","500","600","700"], // specify the weights you need
  style: ["normal", "italic"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Select Healing",
  description: "Select Healing",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
        <Head>
        {/* Google Analytics Script */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-NSF1JXK0GN"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-NSF1JXK0GN');
            `,
          }}
        />
      </Head>
      <body className={` ${inter.variable}  ${monts.variable} ${libre.variable} ${poppins.variable}  `}>
        {children}
      </body>
    </html>
  );
}
