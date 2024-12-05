import { clsx } from 'clsx'
import { DarkToggleProvider, DarkToggleScript } from 'dark-toggle/react'

import type { Metadata, Viewport } from 'next'
import { Handlee, Nunito, Sorts_Mill_Goudy } from 'next/font/google'

import { Provider } from '@/provider'

import './globals.css'

const sans = Nunito({
  display: 'swap',
  subsets: ['latin'],
  variable: '--font-remote-sans',
  weight: ['400', '600', '700'],
})

const serif = Sorts_Mill_Goudy({
  display: 'swap',
  subsets: ['latin'],
  variable: '--font-remote-serif',
  weight: ['400'],
})

const handwriting = Handlee({
  display: 'swap',
  subsets: ['latin'],
  variable: '--font-remote-handwriting',
  weight: ['400'],
})

export const viewport: Viewport = {
  colorScheme: 'light dark',
  themeColor: [
    { color: '#ffffff', media: '(prefers-color-scheme: light)' },
    { color: '#000212', media: '(prefers-color-scheme: dark)' },
  ],
}

export const metadata: Metadata = {
  applicationName: '克喵的小站',
  authors: {
    name: '克喵爱吃卤面',
    url: 'https://github.com/Kemiaojun',
  },
  creator: '克喵爱吃卤面',
  description:
    '一个致力于分享资源和生活的人',
  generator: 'Next.js',
  keywords: [
    '资源',
    '工具',
    '博客',
    '分享',
    '软件',
    '免费',
    '开源',
  ],
  publisher: '克喵爱吃卤面',
  title: {
    absolute: '克喵的小站',
    template: '%s | Ke Miao Blog',
  },
  verification: {
    google: 'ULSANpODFw1TULe1QTOUFT8z8QXPVIA1MRTMQL7PAbw',
  },
}

export default function RootLayout({ children }) {
  return (
    <html
      suppressHydrationWarning
      className={clsx(sans.variable, serif.variable, handwriting.variable)}
      lang='en'
    >
      <head>
        <link
          href='/icon/favicon-32x32.png'
          rel='icon'
          sizes='32x32'
          type='https://jsd.onmicrosoft.cn/gh/Kemiaojun/images@main/img/202412050918389.vnd.microsoft.icon'
        />
        <link
          href='/icon/favicon-16x16.png'
          rel='icon'
          sizes='16x16'
          type='https://jsd.onmicrosoft.cn/gh/Kemiaojun/images@main/img/202412030700752.vnd.microsoft.icon'
        />
        <link
          href='/icon/apple-touch-icon.png'
          rel='https://jsd.onmicrosoft.cn/gh/Kemiaojun/images@main/img/202412042213560.jpg'
          sizes='180x180'
        />
        <link href='/site.webmanifest' rel='manifest' />
        <link
          href='/icon/android-chrome-192x192.png'
          rel='icon'
          sizes='192x192'
          type='https://jsd.onmicrosoft.cn/gh/Kemiaojun/images@main/img/202412042213560.jpg'
        />
        <link
          href='/icon/android-chrome-512x512.png'
          rel='icon'
          sizes='512x512'
          type='https://jsd.onmicrosoft.cn/gh/Kemiaojun/images@main/img/202412042213560.jpg'
        />
        <DarkToggleScript />
      </head>
      <body className='bg-surface font-primary text-color-1'>
        <div className='fixed inset-0 bottom-1/4 -z-10 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] bg-[length:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)] dark:hidden' />
        <Provider>
          <DarkToggleProvider>{children}</DarkToggleProvider>
        </Provider>
      </body>
    </html>
  )
}
