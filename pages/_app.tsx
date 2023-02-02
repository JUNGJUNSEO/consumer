import Layout from '@/components/layout/Layout'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { RecoilRoot } from 'recoil'
import {Noto_Sans_KR} from '@next/font/google'

const notoSansKR = Noto_Sans_KR({
  subsets: ['latin'],
  weight: ['100', '300', '400', '500', '700', '900']
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <div className={notoSansKR.className}>
        <Layout>
          <Component {...pageProps} />
        </Layout> 
      </div>

    </RecoilRoot>
   
  ) 
}
