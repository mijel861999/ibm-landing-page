import Head from 'next/head'
import LogoContainer from '../components/logo-container'

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
			
			<LogoContainer />
    </div>
  )
}