import React from 'react'
import styles from "./telomoyo.module.css"
import Image from 'next/image'
import coffee from "public/angkringan.jpg"
import tlmy1 from "public/tlmy1.jpg"
import tlmy2 from "public/tlmy2.jpg"

const Telomoyo = () => {
  return (
    <div>
<div className={styles.imgcontainer}>
        <Image 
        src={coffee}
        alt=""
        className={styles.img}
        />
          <Image 
        src={tlmy1}
        alt=""
        className={styles.tlmy1}
        align="right"
        />
          
            <h1 className={styles.title}>Angkringan Telomoyo</h1>
            <p className={styles.desc}>Buka dari mulai setelah sholat magrib selesai-sepertiga malam terakhir</p>
            <p className={styles.text1}>Angkringan Telomoyo didirikan pada akhir 2020,</p>
            <p className={styles.text}> didirikan untuk menjadi tempat jagong kawula masa kini </p>
            <p className={styles.text}> di sekitar area kepanjen dan sebagainya.</p>
            <p className={styles.text}>Didirikan oleh dua pemuda yang bertujuan untuk membuka </p>
            <p className={styles.text}>tempat jagong yang beda atau </p>
            <p className={styles.text}>anti-mainstream pada waktu pandemi tengah berlangsung.</p>
            <Image 
        src={tlmy2}
        alt=""
        className={styles.tlmy2}
        align="left"
        />
       
            <div className={styles.kiri}>
        
            <p className={styles.text1}>Angkringan Telomoyo sendiri dikelola oleh 2 orang pemuda,</p>
            <p className={styles.text}> Naufal dan Riza. yang dimana mereka membukanya pada saat pandemi.</p>
            <p className={styles.text}>Sampai saat ini Angkringan Telomoyo, tidak kalah dengan </p>
            <p className={styles.text}>cafe-cafe yang ada di sekitar Kepanjen, </p>
            </div>

            <div className={styles.space}>
            <p className={styles.text1}>Angkringan Telomoyo buka setiap hari senin-sabtu,</p>
            <p className={styles.text}>minggu libur karena tanggal merah. untuk yang ingin berkunjung</p>
            <p className={styles.text}>atau sekedar mampir, silahkan liat google maps di bawah ini untuk lokasinya.</p>
            </div>
          </div>

<div class="mapouter">
  <div className={styles.gmap_canvas}>
    <iframe className={styles.gmap_iframe} frameborder="0" scrolling="no" marginheight="0"
     marginwidth="0" src="https://maps.google.com/maps?width=626&amp;height=400&amp;hl=en&amp;q=University of OxJl. Ahmad Yani No.152, Ardirejo, Kec. Kepanjen, Kabupaten Malang, Jawa Timur 65163ford&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed">
      </iframe>
      </div>
      </div>

    </div>
  )
}

export default Telomoyo