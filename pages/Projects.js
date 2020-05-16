import Nav from "../components/Nav.js"
import Tab from "../components/Tab.js"
import Header from "../components/PageHeaders.js"
import Table from "../components/Table.js"



function ProjectsPage() {
    return (
        <html>
            <Tab title="Projects"/>
            <body>
                <Header heading="Deployed Projects" />
                <Nav />
                <Table />
            </body>
        </html>
    )
}

export default ProjectsPage