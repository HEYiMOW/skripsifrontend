import React from 'react'
import Image from 'next/image'
import news from 'public/newsdb.png'
import coffee from 'public/coffeeshopdb.png'
import Link from 'next/link'
import styles from './admindb.module.css'

const AdminDB = () => {
  return (
    <div> 
    <main className={styles.grid}>
  <Link href='./admindb/shownews'>
  <article>
  <Image src={news} alt=''className={styles.img}/>
      <div class="content">
          <hr /> 
          <h2 className={styles.h2}> News Database </h2>
      </div>
  </article></Link>
  <Link href='./admindb/show'>
  <article>
  <Image src={coffee} alt=''className={styles.img}/>
      <div class="content">
          <hr />
          <h2 className={styles.h2}> Coffee Database </h2>
      </div>
  </article></Link>
  </main>
  </div>
  )
}

export default AdminDB