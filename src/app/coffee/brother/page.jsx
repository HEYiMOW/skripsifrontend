import React from 'react'
import closed from 'public/coffeegif.gif'
import Image from 'next/image'
import styles from './brother.module.css'

const brother = () => {
  return (
    <div><p className={styles.word}>Sorry, Angkringan Brother is 
    Totally Closed.</p>
    <div>
      <Image src={closed} alt='' className={styles.img}/>
    </div>
    </div>
  )
}

export default brother