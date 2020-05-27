import styles from '../public/css_modules/styles.module.css'


function Footer() {
    return (
        <footer className={styles.footer}>
            <p>Created using the next.js framework.</p>
            <p>Contact me: <a href="mailto: pfulton423@gmail.com">pfulton423@gmail.com</a></p>
        </footer>
    
    )
}

export default Footer