import '../styles/globals.css';
import Head from 'next/head';
import 'bootstrap/dist/css/bootstrap.min.css';
import ThemeProvider from 'react-bootstrap/ThemeProvider';


function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}
<div>
  <Head>
    <link rel="preconnect" href="https://fonts.googleapis.com"></link>
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin></link>
    <link href="https://fonts.googleapis.com/css2?family=Dosis:wght@500&display=swap" rel="stylesheet"></link>
  </Head>
  <ThemeProvider
    breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']}
    minBreakpoint="xxs"
  >
    <div>Your app...</div>
  </ThemeProvider>;
</div>

export default MyApp
