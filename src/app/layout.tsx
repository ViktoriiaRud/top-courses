import { Metadata} from 'next';
import { nunito } from './fonts/font';
import './globals.css';

export const metadata: Metadata = {
  title: 'Top-courses',
}


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={nunito.className}>
      <body>
        {children}</body>
    </html>
  )
}