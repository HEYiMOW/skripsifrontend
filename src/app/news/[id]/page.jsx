import React from 'react'
import styles from './page.module.css'
import Image from 'next/image'
import coffee from 'public/coffee-beans.jpg'
import {notFound} from 'next/navigation'


async function getData(id) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`,{
    cache: "no-store"
  })

  if (!res.ok) {
    return notFound()
  }
 
  return res.json()
}

export const NewsPost = async ({params}) => {
  const data = await getData(params.id)
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.info}>
          <h1 className={styles.title}>{data.title}</h1>
          <p className={styles.desc}>
            aku sumpek asline, tapi kudu lulus. yaopo 
            kehidupan iki bes? 
          </p>
        </div>
      </div>
      <div className={styles.imgcontainer}>
      <Image
              src={coffee}
              alt=''
              fill={true}
              className={styles.img}
              />
      </div>
      <div className={styles.content}>
        <p className={styles.text}>
          jenenge kehidupan, lak ga valo yo sambat
          kadang yo guardian tales mbe fifa pisan sih
        </p>
      </div>
    </div>
  )
}

export default NewsPost