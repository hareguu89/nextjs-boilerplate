import type { AppProps } from 'next/app'
import { RecoilRoot } from 'recoil'
import { Layout } from '@components/layout'
import { QueryClientProvider, QueryClient } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'
import { ThemeProvider } from 'styled-components'
import defaultTheme from 'styles/Theme'
import GlobalStyles from 'styles/GlobalStyles'
import { useEffect } from 'react'

const MyApp = ({ Component, pageProps }: AppProps) => {
	const queryClient = new QueryClient()
	useEffect(() => {
		if (process.env.NEXT_PUBLIC_API_MOCKING === 'enabled')
			import('@mocks/index')
	}, [])

	return (
		<>
			<QueryClientProvider client={queryClient}>
				<RecoilRoot>
					<GlobalStyles />
					<ReactQueryDevtools initialIsOpen={false} />
					<ThemeProvider theme={defaultTheme}>
						<Layout>
							<Component {...pageProps} />
						</Layout>
					</ThemeProvider>
				</RecoilRoot>
			</QueryClientProvider>
		</>
	)
}

export default MyApp
