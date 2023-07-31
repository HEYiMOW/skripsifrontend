import React from 'react'
import styles from "./news3.module.css"
import gigs from "public/gigs.jpg"
import Image from 'next/image'


const news3 = () => {
  return (
    <div className={styles.mainContainer}>
    <div className={styles.container}></div>
      <div className={styles.imgcontainer}>
        <Image 
        src={gigs}
        alt=""
        className={styles.img}
        />
            <h1 className={styles.title}>Nogpi Gelar Gigs!</h1>
            <p className={styles.desc}>Sukses dengan gigs pertama, Nogpi Huis siap gelar gigs berikutnya</p>
            <p className={styles.text1}>Setelah sukses dengan gigs kecil-kecilan di 
            awal tahun ini, Nogpi Huis siap gelar gigs kembali!</p>
            <p className={styles.text}>Gigs berikutnya ini dapat di pastikan lebih 
            ramai dari sebelumnya, dikarenakan list list band yang akan tampil.</p>
          </div>
       </div>
  )
}

export default news3