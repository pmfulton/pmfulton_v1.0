import Nav from "../components/Nav.js"
import Tab from "../components/Tab.js"
import Header from "../components/PageHeaders.js"
import Table from "../components/Table.js"
import Footer from "../components/Footer.js"
import classNames from 'classnames'


import styles from "../public/css_modules/styles.module.css"


function ProjectsPage() {
    return (
        <div>
            <Tab title="Projects"/>
            <main className={styles.projectBody}>
                <Header heading="Current Projects" />
                <Nav />
                <div className={styles.p1Header}>
                    <h1><span className={styles.spanCont}><a className={styles.p1Anchor} href="https://fulton-weather-application.herokuapp.com/">Meteorlogical Conditions</a></span></h1>
                </div>
                
                <p> A minimalistic weather application that uses the mapbox and darksky apis to fetch geolocation data and weather data respectively.<br></br>
                    An interactive map is provided to help you keep track of your current search location. Try it out!
                </p>
                <img src="cloud.png"></img>
  
           
            </main>        
        </div>
    )
}

export default ProjectsPage