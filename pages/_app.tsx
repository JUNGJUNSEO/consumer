import '@/styles/globals.css'
import { AppProps } from 'next/app';
import { Noto_Sans_KR } from '@next/font/google';
import Layout from '@/components/layout/Layout';
import { ReactElement, ReactNode} from 'react';
import { NextPage, NextPageContext } from 'next';
import { getIronSession } from 'iron-session';
import { sessionOptions } from '@/lib/withSession';

const notoSansKR = Noto_Sans_KR({
  subsets: ['latin'],
  weight: ['100', '300', '400', '500', '700', '900']
});

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
  user: {id: string; loggedIn: boolean;}
}

function App({ Component, pageProps, user}: AppPropsWithLayout) {
  
  return (

      <div className={notoSansKR.className}>
        <Layout user={user}>
          {Component.getLayout 
            ? Component.getLayout(<Component {...pageProps}/>) 
            : <Component {...pageProps}/>}
        </Layout> 
      </div>
  ) 
}

App.getInitialProps = async ({ctx}: { ctx: NextPageContext }) => {
  const session = await getIronSession(ctx.req, ctx.res, sessionOptions)
  const user = session?.user || { id: '', loggedIn: false };
  return { user };
};



export default App;