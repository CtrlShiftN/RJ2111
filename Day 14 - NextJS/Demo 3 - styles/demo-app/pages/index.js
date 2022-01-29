import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <h1 className="title">
      Read
      <Link href="/about">
        <a>this page!</a>
      </Link>
    </h1>
  )
}
