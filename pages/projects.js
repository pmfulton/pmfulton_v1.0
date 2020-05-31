import Nav from "../components/Nav.js"
import Tab from "../components/Tab.js"
import Header from "../components/PageHeaders.js"
import Table from "../components/Table.js"
import Footer from "../components/Footer.js"

import styles from "../public/css_modules/styles.module.css"


function ProjectsPage() {
    return (
        <div>
            <Tab title="Projects"/>
            <main>
                <Header heading="Deployed Projects" />
                
                <Nav />
                <Table />
                {/* <Footer /> */}
            </main>        
        </div>
    )
}

export default ProjectsPage