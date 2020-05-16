import styles from '../public/css_modules/Headers.module.css'

function Headers(props) {
    return (
        <h1 className={styles.heading}>{props.heading}</h1>
    )
}

export default Headers