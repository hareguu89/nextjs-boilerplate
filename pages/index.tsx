import { ChangeEvent, useEffect, useState } from 'react'
import type { NextPage } from 'next'
import styled from 'styled-components'
import Seo from '@components/seo'
import Sidebar from '@components/Sidebar'
import axios, { AxiosResponse } from 'axios'

const Home: NextPage = (): JSX.Element => {
	const [counter, setCounter] = useState<number>(0)
	const [fruits, setfruits] = useState<string[] | []>([])

	useEffect(() => {
		// eslint-disable-next-line prettier/prettier
		(async () => {
			const { data } = await axios.get('http://localhost:3000/fruit')
			setfruits(data)
		})()
	}, [])

	const fetchFruit = async () => {
		const data = await axios.get('http://localhost:3000/fruit')
		console.log(data)
	}

	return (
		<>
			<Seo title={'Home'} />
			<div>
				count : {counter}
				<button onClick={() => setCounter((pre) => pre + 1)}> click </button>
			</div>
			<div>
				{fruits ? (
					fruits.map((fruit: string, index: number) => {
						return <div key={index}>{fruit}</div>
					})
				) : (
					<div> Loading... </div>
				)}
			</div>
			<Sidebar />
		</>
	)
}

const Input = styled.input`
	padding: 10px;
`

export default Home
