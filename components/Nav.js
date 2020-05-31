import Link from 'next/link'
import styles from '../public/css_modules/styles.module.css'

function NavBar() {
    return (
        // <div className={styles.navContainer}>
            <ul className={styles.navList}>
                <li className={styles.navElement}>
                    <Link href="/">
                        <a className={styles.navBullet}>Home</a>
                    </Link>
                </li>
                <li className={styles.navElement}>
                    <Link href="/projects">
                        <a className={styles.navBullet}>Projects</a>
                    </Link>
                </li>
                <li className={styles.navElement}>
                    <a href="https://github.com/pmfulton" className={styles.navBullet}>Github Account</a>
                </li>
                <li className={styles.navElement}>
                    <a href="https://www.linkedin.com/in/pmfulton/" className={styles.navBullet}>LinkedIn Account</a>                
                </li>
            </ul>
        // </div>
    )
}

export default NavBar