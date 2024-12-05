import { Nunito, Roboto_Mono } from 'next/font/google'

export const nunito = Nunito({
  weight: ['300', '400', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
})

export const roboto_mono = Roboto_Mono({
  weight: ['300', '400', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
})