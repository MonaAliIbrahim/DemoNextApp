import '../styles/globals.css'
import MasterLayout from '../components/MasterLayout/MasterLayout'
// import Font
import { Roboto } from 'next/font/google'
const roboto = Roboto({
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
})

function MyApp({ Component, pageProps }) {
  return (
    <MasterLayout className={roboto.className}>
      <Component {...pageProps} />
    </MasterLayout>
  )
}

export default MyApp