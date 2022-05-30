import '../styles/globals.css'
import type { AppProps } from 'next/app'
import NavBar from 'components/nav'
import { RecoilRoot } from 'recoil'

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<>
			<NavBar />
			<RecoilRoot>
				<Component {...pageProps} />
			</RecoilRoot>
		</>
	)
}

export default MyApp
