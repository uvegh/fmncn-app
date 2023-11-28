import type { Metadata } from 'next'
import { Inter,Rubik,Poppins } from 'next/font/google'

import './globals.css'
import Header from './components/Header'
import AppContainer from './container/index'
import Footer from './components/Footer'

const inter = Inter({ subsets: ['latin'] })
const rubik=Rubik({subsets:['latin']})
const poppins = Poppins({
 weight:['300','400','500','600','800','900'],
 subsets:['latin']
})
export const metadata: Metadata = {
  title: 'Fmcn',
  description: 'Meeting analytics',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <AppContainer>  
      <Header/>
      <body className={`${inter.className} ${rubik.className}${poppins.className} mt-12`}>{children}</body>
      <Footer/>
      </AppContainer>

    </html>
  )
}
