import { AppProps } from 'next/app'
import Link from 'next/link'
import { globalStyles } from '../styles/global'

import { Container, Header } from '../styles/pages/app'
import logoImg from '../assets/logo.svg'

import Image from 'next/image'

globalStyles()

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Container>
      <Header>
        <Link href={'/'}>
          <Image src={logoImg} alt="" />
        </Link>
      </Header>

      <Component {...pageProps} />
    </Container>
  )
}
