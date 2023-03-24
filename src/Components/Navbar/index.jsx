import React from 'react'
import Link from 'next/link'
import styles from "./Navbar.module.css"
export default function Nabar() {
  return (
    <nav className={styles.navbar}>
        <Link href={"/"}>Home</Link>
        <Link href={"/blog"}>Blog</Link>
        <Link href={"/contact"}>Contact</Link>
        <Link href={"/list"}>List</Link>
        <Link href={"/bitcoin"}>Bitcoin</Link>
    </nav>
  )
}
