import { ChangeEvent, useEffect, useState } from 'react'
import type { NextPage } from 'next'
import styles from '../styles/Home.module.css'
import styled from 'styled-components'
import Seo from '@components/seo'

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
			<Seo title={'Home'} />
			<div className={styles.container}>
				{counter}
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
