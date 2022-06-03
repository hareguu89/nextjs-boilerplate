import Link from 'next/link'

const NavBar = () => {
	return (
		<>
			<nav>
				<Link href="/">
					<a>home</a>
				</Link>
				<Link href="/test">
					<a>test</a>
				</Link>
			</nav>
		</>
	)
}

export default NavBar
