import tablestyle from "../public/css_modules/Table.module.css"

function Table() {
    return (
        <table className={tablestyle.table}>
            <tr>
                <th className={tablestyle.th}>Project Name</th>
                <th className={tablestyle.th}>Deployed With</th>
                <th className={tablestyle.th}>Description</th>
            </tr>
            <tr>
                <td className={tablestyle.td}><a href="https://fulton-weather-application.herokuapp.com/">Weather Application</a></td>
                <td className={tablestyle.td}>Heroku</td>
                <td className={tablestyle.td}>A basic web application that uses a third party map api to fetch the current weather.</td>
            </tr>
        </table>
    ) 

}

export default Table