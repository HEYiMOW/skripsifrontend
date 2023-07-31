import React from 'react'
import Image from 'next/image'
import nogpi1 from "public/nogpi1.jpg"
import nogpi2 from "public/nogpi2.jpg"
import styles from "./nogpi.module.css"

const Nogpi = () => {
  return (
    <div>
      <div className={styles.imgcontainer}>
        <Image 
        src={nogpi2}
        alt=""
        className={styles.img}
        />
          <Image 
        src={nogpi2}
        alt=""
        className={styles.tlmy1}
        align="right"
        />
          
            <h1 className={styles.title}>Nogpi Huis</h1>
            <p className={styles.desc}>Mulai Buka pukul 13:00 sampai dengan 23:00</p>
            <p className={styles.text1}>Nogpi Huis, kedai kopi sederhana yang ada di </p>
            <p className={styles.text}> dalam gang ini mulai beroperasi sejak tahun 2021.</p>
            <p className={styles.text}>Didirikan oleh seorang pemuda yang memang ingin membuka </p>
            <p className={styles.text}>Kedai kopi yang di inginkannya sejak dulu, serta </p>
            <p className={styles.text}>ingin membuat sebuah tempat nongkrong kekinian.</p>
            <Image 
        src={nogpi1}
        alt=""
        className={styles.tlmy2}
        align="left"
        />
       
            <div className={styles.kiri}>
        
            <p className={styles.text1}>Nogpi Huis ini di kelola oleh owner mereka sendiri</p>
            <p className={styles.text}> yaitu, Nicho. dan tak lama saudara</p>
            <p className={styles.text}>dan, temannya ikut membantu mengelola kedai kecil mereka ini. </p>
            <p className={styles.text}>Sehingga, sekarang Nogpi Huis terbilang cukup ramai. </p>
            </div>

            <div className={styles.space}>
            <p className={styles.text1}>Nogpi Huis ini buka setiap hari, dan</p>
            <p className={styles.text}>bisa dikunjungi mulai pukul 13 siang hingga 11 malam.</p>
            <p className={styles.text}>Untuk yang ingin mampir silahkan cek maps di bawah ini.</p>
            </div>
          </div>
          <div class="mapouter">
            <div class={styles.gmap_canvas}>
              <iframe class={styles.gmap_iframe} frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=Jl. Sidodadi No.07, Krajan, Panggungrejo, Kec. Kepanjen, Kabupaten Malang, Jawa Timur 65163&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed">
                </iframe>
       
                </div>
                </div>
    </div>
  )
}

export default Nogpi