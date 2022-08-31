import '../styles/globals.css'
import { ParallaxProvider } from 'react-scroll-parallax'
import ProgressBar from '@badrap/bar-of-progress'
import Router from 'next/router'
function MyApp({ Component, pageProps }) {
  const progress=new ProgressBar({
    size:4,
    color:'#FE595E',
    className:'Z-50',
    delay:100
  })
  Router.events.on('routeChangeStart',progress.start)
  Router.events.on('routeChangeComplete',progress.finish)
  Router.events.on('routeChangeError',progress.finish)
  return (
    <ParallaxProvider scrollAxis='vertical'>
      <Component {...pageProps} />
    </ParallaxProvider>

  )
}

export default MyApp
