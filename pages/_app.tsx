import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { RecoilRoot } from 'recoil'
import { Layout } from '@components/layout'
import { useEffect } from 'react'

const MyApp = ({ Component, pageProps }: AppProps) => {
	useEffect(() => {
		if (process.env.NEXT_PUBLIC_API_MOCKING === 'enabled') {
			import('@mocks/index')
		}
	}, [])
	return (
		<>
			<RecoilRoot>
				<Layout>
					<Component {...pageProps} />
				</Layout>
			</RecoilRoot>
		</>
	)
}

export default MyApp
