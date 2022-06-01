import '../styles/globals.css'
import type { AppProps } from 'next/app'
import NavBar from '@components/nav'
import Head from 'next/head'
import { RecoilRoot } from 'recoil'

const MyApp = ({ Component, pageProps }: AppProps) => {
	return (
		<>
			<Head>
				<title>Next Boiler Plate</title>
				<meta
					name="description"
					content="this is for nextjs typescript recoil boilerplate"
				/>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<NavBar />
			<RecoilRoot>
				<Component {...pageProps} />
			</RecoilRoot>
		</>
	)
}

export default MyApp
