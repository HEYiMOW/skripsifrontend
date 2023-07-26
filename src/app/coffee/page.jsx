import React from 'react'
import Image from 'next/image'
import baswara from 'public/baswarafix.png'
import tlmy from 'public/telomoyofix.png'
import nogpi from 'public/nogpifix.png'
import laochra from 'public/laochra.png'
import styles from './coffee.module.css'
import Link from 'next/link'

const Coffee = () => {
  return (
    <div> 
      <main className={styles.grid}>
    <article>
    <Image src={baswara} alt=''className={styles.img}/>
        <div class="content">
            <hr /> 
            <h2> kedai Baswara </h2>
        </div>
    </article>
    <article>
    <Image src={tlmy} alt=''className={styles.img}/>
        <div class="content">
            <hr />
            <h2> Angkringan Telomoyo </h2>
        </div>
    </article>
    <article>
    <Image src={nogpi} alt=''className={styles.img}/>
        <div class="content">
            <hr />
            <h2> Nogpi Huis </h2>
        </div>
    </article>
    <Link href='./coffee/baswara'><article>
    <Image src={laochra} alt=''className={styles.img}/>
        <div class="content">
            <hr /> 
            <h2> kedai Baswara </h2>
        </div>
    </article></Link>
    <Link href='./coffee/laochra'><article>
    <Image src={laochra} alt=''className={styles.img}/>
        <div class="content">
            <hr />
            <h2> Laochra Coffee </h2>
        </div>
    </article></Link>
    <article>
    <Image src={nogpi} alt=''className={styles.img}/>
        <div class="content">
            <hr />
            <h2> Nogpi Huis </h2>
        </div>
    </article>
    
</main>
    </div>
  )
}

export default Coffee