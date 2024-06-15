import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import styles from "@/components/Header/header.module.css"

function Header() {
    return (

        <div className={styles.mainContainer}>
            <nav className={styles.navbar}>
                <div className={styles.mainLogo}>
                    <Link href="" >
                        <div className={styles.logo}>
                            <img src="/HeaderLogo.PNG" alt="Logo" height={80} width={70} />
                            <span className={styles.logoText}>AKESHYA</span>
                        </div>
                    </Link>
                </div>
                <div className={styles.mainLinks}>
                    <div className={styles.links}>
                        <Link href="" className={styles.navLink}>
                            Home
                        </Link>
                        <Link href="" className={styles.navLink}>
                            About
                        </Link>
                        <Link href="" className={styles.navLink}>
                            Services
                        </Link>
                    </div>
                    <Link href="" className={styles.contactButton} >
                        Contact us
                    </Link>
                </div>
            </nav>
        </div>
    )
}

export default Header