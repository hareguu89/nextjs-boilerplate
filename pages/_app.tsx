import type { AppProps } from 'next/app'
import { RecoilRoot } from 'recoil'
import { Layout } from '@components/layout'

if (process.env.NEXT_PUBLIC_API_MOCKING === 'enabled') {
	import('@mocks/index')
}

const MyApp = ({ Component, pageProps }: AppProps) => {
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
