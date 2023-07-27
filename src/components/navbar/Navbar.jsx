import Link from 'next/link'
import React from 'react'
import styles from './navbar.module.css'



const links = [
    {
        id: 1,
        title: "Home",
        url: "/",
    },
    {
        id: 2,
        title: "News",
        url: "/news",
    },
    {
        id: 3,
        title: "Coffeeshop",
        url: "/coffee",
    },
    {
        id: 4,
        title: "Form",
        url: "/form",
    },
];

const Navbar = () => {
  return (
    <div className={styles.container}>
        <Link href="/" className={styles.logo}>nenjapcoffee </Link>
        <div>
          
           {links.map((link) =>(
            <Link key={link.id} href={link.url} className={styles.link}>{link.title}</Link>
           ))}
        </div>
    </div>

  )
}

export default Navbar