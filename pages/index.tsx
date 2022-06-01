import { ChangeEvent, useEffect, useState } from 'react'
import type { NextPage } from 'next'
import styles from '../styles/Home.module.css'
import { useRecoilState, useRecoilValue } from 'recoil'
import { fontSizeState } from '../src/store'
import styled from 'styled-components'

const FontButton = (): JSX.Element => {
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

const Text: React.FC<{ text: string }> = ({ text }): JSX.Element => {
	const fontSize = useRecoilValue(fontSizeState)

	useEffect(() => {
		console.log(text)
	}, [text])

	return <p style={{ fontSize }}>This text will increase in size too.</p>
}

const Home: NextPage = (): JSX.Element => {
	const [counter, setCoutner] = useState<number>(0)
	const [inputTest, setInputTest] = useState<string>('')

	const changeEvent = ({
		target: { value },
	}: ChangeEvent<HTMLInputElement>): void => {
		setInputTest(value)
	}

	return (
		<>
			<div className={styles.container}>
				{counter}
				<Text text={inputTest} />
				<FontButton />
				<button onClick={() => setCoutner((pre) => pre + 1)}> click </button>
				<Input type="text" value={inputTest} onChange={changeEvent} />
				{inputTest}
			</div>
		</>
	)
}

const Input = styled.input`
	padding: 10px;
`

export default Home
