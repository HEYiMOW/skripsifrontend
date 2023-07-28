import React from 'react'
import Link from 'next/link'
import styles from "./show.module.css"
import Image from 'next/image'

import coffee from "public/coffeeshopdb.png"


async function getData() {
  const res = await fetch('https://my-json-server.typicode.com/HEYiMOW/APInews/posts',{
    cache: "no-store"
  })

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
 
  return res.json()
}


const ShowNews = async () => {
  
  const data = await getData()
  return (
    <div className={styles.mainContainer}>
                <div className={styles.img}>
        <Image 
        src={coffee}
        alt=""
        className={styles.image}
        />
  <h1 className={styles.title}>Table Data News terbaru</h1>
      </div>
       <table striped bordered hover className={styles.table}>
                                <thead>
                                    <tr>
                                        <th>NO.</th>
                                        <th>Title</th>
                                        <th>Desc</th>
                                        <th>Top</th>
                                        <th>Bottom</th>
                                      
                                    </tr>
                                </thead>
                                <tbody>
                                    { data.map((item, index) => (
                                        <tr key={ item.id }>
                                            <td>{ index + 1 }</td>
                                            <td>{ item.title }</td>
                                            <td>{ item.desc }</td>
                                            <td>{ item.top }</td>
                                            <td>{ item.bottom }</td>
                                           
                                           
                                      
                                            <td className="text-center"></td>
                                        </tr>
                                    )) }
                                </tbody>
                            </table>
    </div>
  )
}

export default ShowNews