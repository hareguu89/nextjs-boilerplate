import Link from 'next/link'
import type { NextPage } from 'next'
import Seo from '@components/seo'
import Sidebar from '@components/Sidebar'

const Home: NextPage = () => {
	return (
		<>
			<Seo title={'Home'} />
			<Sidebar />
			<Link href="/login">path</Link>
		</>
	)
}

export default Home
