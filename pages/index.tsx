import { useState } from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import NavBar from '../components/nav'

const Home: NextPage = () => {
  
  const [counter, setCoutner] = useState(0)

  return <>
    <div className={styles.container}>
      <NavBar/>
      <Head>
        
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {counter}
      <button onClick={() => setCoutner(pre => pre + 1)}> click </button>
    </div>
  </>
}

export default Home
