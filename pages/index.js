import Head from 'next/head'
import LogoContainer from '../components/logo-container'
import LaptopContainer from '../components/laptop-container'
import SendMeMessage from '../components/send-me-message'
import Advantages from '../components/advantages'

export default function Home() {
  return (
    <div className="p-9 font-Inter">
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <LogoContainer />
      <LaptopContainer />
      <SendMeMessage />
      <Advantages />
    </div>
  )
}
