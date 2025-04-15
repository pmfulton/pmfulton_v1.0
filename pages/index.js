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
                        <p>Short paragraph introducing yourself...</p>
                    </div>
                </div>
                <div className={styles.indexBody}>
                    <p> 
                        Hi! My name is Peter Fulton and I am an aspiring software developer. 
                        I found my passion in programming when I first learned Python for an undergraduate research position at the University of Connecticut.
                        My goal was to create a data analysis program that parsed through a .csv file containing two years of chemical species data
                        collected from a WPCF facility on campus. The program took this data and created time dependent scatter plots to determine if any correlations existed
                        between chemical species at time t vs t+1. Linear, second order and third order correlations were examined in all cases. 
                        Ever since my first encounter with Python, I have loved programming and have taught myself fundamentals of different languages such as javascript & java. While I mainly work
                        in python and javascript, I am always looking for new opportunities to test my skills with other languages.
                    </p>
                    <p>
                        I am testing the git push and deployment of this website. 

                    </p>
                    <p> 
                        Looking for a software engineer? Check out my <span className={styles.spanCont}><a href="/resume.pdf" target="_blank" rel="noopener noreffer">resume</a>!</span>
                        <br></br>If you have any questions, feel free to contact me using the email address below. I am always happy to discuss my work and 
                        relevant programming technologies. 
                    </p>   
                </div>
            </main>
        </div>
    )
}

export default AboutMe