import '@/styles/globals.css'
import { AppProps } from 'next/app';
import { Noto_Sans_KR } from '@next/font/google';
import Layout from '@/components/layout/Layout';
import { ReactElement, ReactNode} from 'react';
import { NextPage } from 'next';


const notoSansKR = Noto_Sans_KR({
  subsets: ['latin'],
  weight: ['100', '300', '400', '500', '700', '900']
});

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
}

function App({ Component, pageProps }: AppPropsWithLayout) {
  
  return (

      <div className={notoSansKR.className}>
        <Layout>
          {Component.getLayout 
            ? Component.getLayout(<Component {...pageProps}/>) 
            : <Component {...pageProps}/>}
        </Layout> 
      </div>
  ) 
}





export default App;