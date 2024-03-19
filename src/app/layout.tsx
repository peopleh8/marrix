import { gilroy } from '@/fonts/fonts'
import type { Metadata } from 'next'
import ReduxProvider from '@/providers/redux'
import MainLayout from '@/layouts/main'
import 'normalize.css'
import '@/styles/index.scss'

export const metadata: Metadata = {
  title: 'Marrix Power',
  description: 'Marrix Power',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body className={gilroy.className}>
        <ReduxProvider>
          <MainLayout>
            {children}
          </MainLayout>
        </ReduxProvider>
      </body>
    </html>
  )
}
