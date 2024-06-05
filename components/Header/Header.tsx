import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import styles from "@/components/Header/header.module.css"

function Header() {
    return (
        // <header className={styles.mainDiv}>
            
    
        //     <div className={styles.mainNav}>
        //   <div className={styles.logoText}>
        //     <Image src="/HeaderLogo.png" alt="logo" width={80} height={80} />
        //     <h1 className={styles.textName}>Akeshya</h1>
    
            
    
            
        //   </div>
    
        //   <div className="flex gap-8 items-center">
        //     <h2 className="flex gap-8 items-center text-lg">
        //     <Link className={styles.Link} href={"/"}>Home</Link>
        //         <Link className={styles.Link} href={"/"}>About</Link>
        //         <Link className={styles.Link} href={"/"}>Services</Link>
                
        //     <button>Contact us</button>
        //     </h2>
            
        //   </div>
        // </div>
        // </header>

        <div className={styles.mainContainer}>
            <nav className={styles.navbar}>
            <div className={styles.mainLogo}>
            <Link href="" >
                <div className={styles.logo}>
                    <img src="/HeaderLogo.PNG" alt="Logo" height={80} width={70}/>
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