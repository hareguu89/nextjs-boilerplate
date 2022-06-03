import { ChangeEvent, useEffect, useState } from 'react'
import type { NextPage } from 'next'
import styled from 'styled-components'
import Seo from '@components/seo'
import axios from 'axios'

const Home: NextPage = (): JSX.Element => {
	const [counter, setCoutner] = useState<number>(0)
	const [inputTest, setInputTest] = useState<string>('')

	const changeEvent = ({
		target: { value },
	}: ChangeEvent<HTMLInputElement>): void => {
		setInputTest(value)
	}

	const fetchFruit = async () => {
		const data = await axios.get('http://localhost:3000/fruit')
		console.log(data)
	}

	return (
		<>
			<Seo title={'Home'} />
			<div>
				{counter}
				<button onClick={fetchFruit}> click </button>
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
