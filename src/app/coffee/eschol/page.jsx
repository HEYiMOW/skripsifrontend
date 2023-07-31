import React from 'react'
import Image from 'next/image'
import es1 from "public/eschol.png"
import es2 from "public/eschol1.png"
import styles from "./eschol.module.css"

const eschol = () => {
  return (
    <div>
        <div className={styles.imgcontainer}>
    <Image 
    src={es2}
    alt=""
    className={styles.img}
    />
      <Image 
    src={es1}
    alt=""
    className={styles.tlmy1}
    align="right"
    />
      
        <h1 className={styles.title}>Eschol Cafe</h1>
        <p className={styles.text1}>Eschol Cafe mulai buka pada akhir tahun lalu,</p>
        <p className={styles.text}>di dirikan satu atap dengan sebuah klinik kecantikan</p>
        <p className={styles.text}>yang bertujuan, agar pelanggan klinik yang ada</p>
        <p className={styles.text}>bisa santai sambil menikmati kopi ketika mereka</p>
        <p className={styles.text}>sedang melakukan perawatan pada klinik tersebut.</p>
      
        <Image 
    src={es1}
    alt=""
    className={styles.tlmy2}
    align="left"
    />
   
        <div className={styles.kiri}>
    
        <p className={styles.text1}>Eschol Cafe ini dikelola oleh beberapa tenaga</p>
        <p className={styles.text}>kerja yang di pekerjakan oleh owner.</p>
        <p className={styles.text}>dan, sampai saat ini Eshcol Cafe terbilang cukup ramai </p>
        <p className={styles.text}>begitu pula dengan klinik kecantikannya.</p>
        </div>

        <div className={styles.space}>
        <p className={styles.text1}>Eschol Cafe mulai beroperasi sama halnya dengan,</p>
        <p className={styles.text}>klinik kecantikannya, mulai pukul 10 Pagi.</p>
        <p className={styles.text}>Untuk yang ingin mampir untuk ngopi atau perawatan, bisa cek lokasi di bawah ini.</p>
        </div>
      </div>
      <div class="mapouter">
        <div class={styles.gmap_canvas}>
            <iframe class={styles.gmap_canvas} frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=Sukun, Kepanjen, Malang Regency, East Java 65163&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed">
                </iframe>
                </div>
                </div>
      </div>
  )
}

export default eschol