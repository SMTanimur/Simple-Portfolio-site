import Layout from '@components/Layout';
import '../../styles/globals.css';
import '../../styles/nprogress.css';
import { ThemeProvider } from 'next-themes';
import Router from 'next/router';
import nProgress from 'nprogress';

Router.events.on('routeChangeStart', nProgress.start);
Router.events.on('routeChangeError', nProgress.done);
Router.events.on('routeChangeComplete', nProgress.done);

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider enableSystem={true} attribute='class'>
      <div className='bg-red-200 dark:bg-gray-800 dark:text-white'>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </div>
    </ThemeProvider>
  );
}

export default MyApp;
