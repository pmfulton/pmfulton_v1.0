import Header from "../components/PageHeaders.js"
import NavBar from "../components/Nav.js"
import Tab from "../components/Tab.js"
import Footer from "../components/Footer.js"

import styles from "../public/css_modules/styles.module.css"


function AboutMe() {
    return (
        <div>
            <Tab title="Home"/>
            <main>
                <Header heading="Peter Fulton - Software Developer" />
                <NavBar />
                <div class="container">
                    <img class="me" src="..." alt="Your portrait"></img>
                    <div class="card">
                        <p>Graduate Researcher working for the Srivastava Lab Group at UConn.</p>
                    </div>
                </div>
                <div className={styles.indexBody}>
                </div>
            </main>
        </div>
    )
}

export default AboutMe