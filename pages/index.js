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
                <div className={styles.indexBody}>
                    <img src="me.jpg" alt="self" />
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
                        In my spare time, I like to tinker with computer hardware and assemble my own computers. My last build incorporated a custom liquid cooling loop with pmma tubing to 
                        cool the installed intel i9 9900k cpu.  

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