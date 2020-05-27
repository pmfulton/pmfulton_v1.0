import styles from '../public/css_modules/styles.module.css'

function Headers(props) {
    return (
        <div className={styles.header}>
            <h1>{props.heading}</h1>
        </div>
        

    )
}

export default Headers