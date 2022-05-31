import { useState } from 'react'
import type { NextPage } from 'next'
import styles from '../styles/Home.module.css'
import { useRecoilState } from 'recoil'
import { fontSizeState } from '../store'

const FontButton = () => {
	const [fontSize, setFontSize] = useRecoilState(fontSizeState)
	return (
		<button
			onClick={() => setFontSize((size) => size + 1)}
			style={{ fontSize }}
		>
			Click to Enlarge
		</button>
	)
}

const Text = () => {
	const [fontSize, setFontSize] = useRecoilState(fontSizeState)
	return <p style={{ fontSize }}>This text will increase in size too.</p>
}

const Home: NextPage = () => {
	const [counter, setCoutner] = useState(0)

	return (
		<>
			<div className={styles.container}>
				{counter}
				<Text />
				<FontButton />
				<button onClick={() => setCoutner((pre) => pre + 1)}> click </button>
			</div>
		</>
	)
}

export default Home
