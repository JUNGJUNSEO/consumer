import '@/styles/globals.css'
import { AppProps } from 'next/app';
import { RecoilRoot } from 'recoil';
import {Noto_Sans_KR} from '@next/font/google';
import Layout from '@/components/layout/Layout';
import { ReactElement, ReactNode, useEffect, useState } from 'react';
import { NextPage } from 'next';

const notoSansKR = Noto_Sans_KR({
  subsets: ['latin'],
  weight: ['100', '300', '400', '500', '700', '900']
});

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}



function App({ Component, pageProps }: AppPropsWithLayout) {

  const [user, setUser] = useState({id:'', loggedIn: false})

  useEffect(() => {

    async function fetchUser() {
      try {
        const response = await fetch('/api/userinfo')
        if (response.ok) {
          const data = await response.json()
          setUser(data)
        }
      } catch (error) {
        setUser({id:'', loggedIn: false})
      }
    }
    fetchUser()

  }, [])

  return (
    <RecoilRoot>
      <div className={notoSansKR.className}>
        <Layout user={user}>
          {Component.getLayout 
            ? Component.getLayout(<Component {...pageProps}/>) 
            : <Component {...pageProps}/>}
        </Layout> 
      </div>
    </RecoilRoot>
  ) 
}



export default App;