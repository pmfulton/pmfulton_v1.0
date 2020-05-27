import Nav from "../components/Nav.js"
import Tab from "../components/Tab.js"
import Header from "../components/PageHeaders.js"
import Table from "../components/Table.js"
import Footer from "../components/Footer.js"

import styles from "../public/css_modules/styles.module.css"


function ProjectsPage() {
    return (
        <html>
            <Tab title="Projects"/>
            <body className={styles.body}>
                <Header heading="Deployed Projects" />
                
                <Nav />
                <Table />
                <Footer />
            </body>        
        </html>
    )
}

export default ProjectsPage