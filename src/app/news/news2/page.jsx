import React from 'react'
import styles from "./news2.module.css"
import coffee from "public/coffee-beans.jpg"
import Image from 'next/image'

const news2 = () => {
  return (
    <div className={styles.mainContainer}>
    <div className={styles.container}></div>
      <div className={styles.imgcontainer}>
        <Image 
        src={coffee}
        alt=""
        className={styles.img}
        />
            <h1 className={styles.title}>Baswara Punya Menu Baru</h1>
            <p className={styles.desc}>Semakin aktif, Kedai Kopi Baswara memunculkan menu barunya!</p>
            <p className={styles.text1}>Di awal tahun ini, owner dari Kedai Kopi Baswara,
            berniatan memunculkan menu baru yang tengah dikembangkannya!</p>
            <p className={styles.text}>Menu baru ini kemungkinan akan muncul di 
            pertengahan Tahun ini, atau akhir tahun nanti.</p>
          </div>
       </div>
  )
}

export default news2