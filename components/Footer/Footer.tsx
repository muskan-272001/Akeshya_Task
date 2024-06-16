import React from 'react'
import styles from "./footer.module.css"
import Link from 'next/link';

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.copyright}>
        © Copyright <span className={styles.highlight}>Akesha</span>. All Rights Reserved
      </div>
      <div className={styles.links}>
        <Link href="/terms-and-conditions">Terms and conditions</Link>
        <Link href="/refund-policy">Refund policy</Link>
        <Link href="/privacy-policy">Privacy policy</Link>
      </div>
      <div className={styles.upArrow}>
        <a href="#top">↑</a>
      </div>
    </footer>
  )
}

export default Footer
