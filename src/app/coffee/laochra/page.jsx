import React from 'react'
import closed from 'public/coffee.gif'
import Image from 'next/image'
import styles from './laochra.module.css'

const Laochra = () => {
  return (
    <div>
      <p className={styles.word}>Sorry, Laochra is 
      Totally Closed.</p>
      <div>
        <Image src={closed} alt='' className={styles.img}/>
      </div>
    </div>
  )
}

export default Laochra