import { Montserrat } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar/Navbar' //@ mean that we are in the root folder src 
import Footer from '@/components/Footer/Footer'
import { ThemeProvider } from '@/context/ThemeContext'

const BodyFont = Montserrat({ 
  subsets: ['latin'], 
  weight: ['400', '700', '900'] })

export const metadata = {
  title: 'HEXASHOP - HOME',
  description: 'Discover a world of endless shopping possibilities at our online store. Browse, choose, and order your favorite products from the conmfort of your home',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={BodyFont.className}>
        <ThemeProvider>
          <div className='container'>
            <Navbar />
            {children}
            <Footer />
          </div>  
        </ThemeProvider>  
      </body>
    </html>
  )
}
