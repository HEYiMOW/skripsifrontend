import React from 'react'
import Image from 'next/image'
import bas1 from "public/baswara1.jpg"
import bas2 from "public/baswara2.jpg"
import styles from "./baswara.module.css"

const Baswara = () => {
  return (
    <div>
      <div className={styles.imgcontainer}>
        <Image 
        src={bas2}
        alt=""
        className={styles.img}
        />
          <Image 
        src={bas2}
        alt=""
        className={styles.tlmy1}
        align="right"
        />
          
            <h1 className={styles.title}>Kedai Kopi Baswara</h1>
            <p className={styles.desc}>Brewing Hours (11:00-23:00)</p>
            <p className={styles.text1}>Kedai Kopi Baswara mulai berdiri sejak jaman pandemi,</p>
            <p className={styles.text}> di dirikan agar menambah pasar coffeeshop</p>
            <p className={styles.text}> di sekitar area kepanjen dan sebagainya.</p>
            <p className={styles.text}>Didirikan oleh seorang pemuda yang bertujuan untuk membuka </p>
            <p className={styles.text}>Kedai kopi dengan model terkini dan </p>
            <p className={styles.text}>nyaman untuk di singgahi oleh kawula muda.</p>
            <Image 
        src={bas1}
        alt=""
        className={styles.tlmy2}
        align="left"
        />
       
            <div className={styles.kiri}>
        
            <p className={styles.text1}>Kedai Kopi Baswara ini pertama kali di kelola oleh</p>
            <p className={styles.text}> Owner mereka sendiri, yaitu Theo</p>
            <p className={styles.text}>dan, sampai akhirnya kini mulai menggaet teman-teman </p>
            <p className={styles.text}>sekitarnya untuk bisa diajak bekerja bersama </p>
            </div>

            <div className={styles.space}>
            <p className={styles.text1}>Kedai Kopi Baswara ini buka setiap hari, dan</p>
            <p className={styles.text}>bisa dikunjungi mulai pukul 11 pagi hingga 11 malam.</p>
            <p className={styles.text}>Untuk yang ingin mampir silahkan cek maps di bawah ini.</p>
            </div>
          </div>
          <div class="mapouter">
            <div class={styles.gmap_canvas}>
            <iframe class={styles.gmap_iframe} frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=University of OJl. Kawi No.42b, Banurejo, Kepanjen, Kec. Kepanjen, Kabupaten Malang, Jawa Timur 65163xford&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed">
              </iframe>
              
              </div>
              </div>
    </div>
  )
}

export default Baswara