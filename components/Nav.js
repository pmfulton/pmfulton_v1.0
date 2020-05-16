import Link from 'next/link'
import styles from '../public/css_modules/Nav.module.css'

function NavBar() {
    return (
        <div>
            <ul className={styles.list}>
                <li className={styles.element}>
                    <Link href="/">
                        <a className={styles.bullet}>Home</a>
                    </Link>
                </li>
                <li className={styles.element}>
                    <Link href="/about">
                        <a className={styles.bullet}>About Me</a>
                    </Link>
                </li>
                <li className={styles.element}>
                    <Link href="/projects">
                        <a className={styles.bullet}>Projects</a>
                    </Link>
                </li>
                <li className={styles.element}>
                    <a href="https://github.com/pmfulton" className={styles.bullet}>Github Account</a>
                </li>
                <li className={styles.element}>
                    <a href="https://www.linkedin.com/in/pmfulton/" className={styles.bullet}>LinkedIn Account</a>                
                </li>
            </ul>
        </div>
    )
}

export default NavBar