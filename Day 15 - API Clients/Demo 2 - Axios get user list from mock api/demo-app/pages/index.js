import axios from 'axios'
import Head from 'next/head'
import Image from 'next/image'
import { Component, useEffect, useState } from 'react'
import styles from '../styles/Home.module.css'

export default function Home() {
  const [users, setUsers] = useState(null)
  useEffect(() => {
    axios.get('http://localhost:3001/api/user/list')
      .then((res) => {
        setUsers(res.data);
      })
    console.log(users)
  }, [users])

  return (
    <div className={styles.container}>

    </div>
  )

}
