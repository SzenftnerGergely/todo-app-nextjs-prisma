import type { Metadata } from 'next'
import { Josefin_Sans } from 'next/font/google'
import './globals.css'
import Background from '@/components/shared/Background'
import ThemeContextProvider from '@/components/shared/ThemeContext'


const Josefin_San = Josefin_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
})

export const metadata: Metadata = {
  title: 'Todo App',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={Josefin_San.className}>
        <ThemeContextProvider>
          <div className='dark:bg-[#181824] bg-gray-50 h-screen w-full 
          flex flex-col items-center text-gray-600 dark:text-gray-400'>
            <Background/>
            {children}
          </div>
        </ThemeContextProvider>
      </body>
    </html>
  )
}
