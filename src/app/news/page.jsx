import React from 'react'
import Link from 'next/link'
import styles from "./page.module.css"
import Image from 'next/image'


async function getData() {
  const res = await fetch('https://my-json-server.typicode.com/HEYiMOW/newsAPI/news',{
    cache: "no-store"
  })

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
 
  return res.json()
}


const News = async () => {
  
  const data = await getData()
  return (
    <div className={styles.mainContainer}>
      {data.map((item) => (
        <Link href={"news/"+item.link} 
        className={styles.container} key={item.id}>
          <div className={styles.imgcontainer}>
            <Image
              src={"/assets/images/"+ item.image}
              alt=''
              width={400}
              height={250}
              className={styles.img}
              />
          </div>
          <div className={styles.content}>
            <h1 className={styles.title}>{item.title}</h1>
            <p className={styles.desc}>{item.desc}</p>
          </div>
        </Link>
        ))}
    </div>
  )
}

export default News