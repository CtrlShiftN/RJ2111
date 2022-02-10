import Head from 'next/head'
import Image from 'next/image'
import { useRouter } from 'next/router';
import styles from '../styles/Home.module.css'

export default function Home() {
  const router = useRouter();
  return (
    <div className={styles.container}>
      <h2>Login</h2>
      <form>
        <input type="email" id="login" name="login" placeholder="login" />
        <br />
        <input type="password" id="password" name="login" placeholder="password" />
        <br />
        <button type="button" className={styles.button} onClick={() => router.push('/home')}>Log In</button>
      </form>
    </div>
  )
}
