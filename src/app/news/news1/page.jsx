import React from 'react'
import styles from "./news1.module.css"
import coffee from "public/tlmy1.jpg"
import Image from 'next/image'

const News = async () => {
  
  
  return (
    <div className={styles.mainContainer}>
    <div className={styles.container}></div>
      <div className={styles.imgcontainer}>
        <Image 
        src={coffee}
        alt=""
        className={styles.img}
        />
            <h1 className={styles.title}>Telomoyo Buka Lagi</h1>
            <p className={styles.desc}>Setelah libur panjang lebaran, Angkringan Telomoyo aktif lagi!</p>
            <p className={styles.text1}>Akhirnya setelah libur panjang lebaran, 
              Angkringan Telomoyo sudah mulai bisa dikunjungi kembali!</p>
            <p className={styles.text}>Angkringan Telomoyo mulai buka pada tanggal 10 mei 2023,
            kalian bisa mengunjungi Angkringan Telomoyo Mulai Pukul 19:00-Secapeknya Bakul</p>
          </div>
       </div>

 
  )
}

export default News