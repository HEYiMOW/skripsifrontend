import Image from 'next/image'
import styles from './page.module.css'
import Hero from "public/hero.png"
import coba from "public/coba.png"
import Link from 'next/link'
import Coffee from './coffee/page'

export default function Home() {
  return (
    
   <div className={styles.container}>
    <div className={styles.item}>
      <p className={styles.word}>Bingung
     mau ngopi
     dimana?</p>
     <Link href="./coffee"><button className={styles.button}>Temukan!</button></Link> 
    </div>
    <div className={styles.item}>
    
      <Image src={Hero} alt='' className={styles.img} />
     
    </div>
   </div>
  )
}
