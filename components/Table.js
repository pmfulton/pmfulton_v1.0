import styles from "../public/css_modules/styles.module.css"

function Table() {
    return (
        <table className={styles.table}>
            <tr>
                <th className={styles.th}>Project Name</th>
                <th className={styles.th}>Deployed With</th>
                <th className={styles.th}>Description</th>
            </tr>
            <tr>
                <td className={styles.td}><a href="https://fulton-weather-application.herokuapp.com/">Weather Application</a></td>
                <td className={styles.td}>Heroku</td>
                <td className={styles.td}>A basic web application that uses a third party map api to fetch the current weather.</td>
            </tr>
        </table>
    ) 

}

export default Table