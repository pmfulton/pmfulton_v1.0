import Header from "../components/PageHeaders.js"
import NavBar from "../components/Nav.js"
import styles from "../public/css_modules/Text.module.css"
import ColumnStyle from "../public/css_modules/Column.module.css"
import Tab from "../components/Tab.js"
import imagestyles from "../public/css_modules/Image.module.css"

function AboutMe() {
    return (
        <html>
            <Tab title="About Me"/>
            <body>
                <Header heading="About Me" />
                <NavBar />
                <div className={ColumnStyle.column}>
                    <p className={styles.text}> 
                        Hi! My name is Peter Fulton and I am an aspiring full-stack software engineer. 
                        I found my passion in programming when I first learned Python for an undergraduate research position at the University of Connecticut.
                        My goal was to create a data analysis program that parsed through a .csv file containing two years of chemical species data
                        collected from a WPCF facility on campus. The program took this data and created time dependent scatter plots to determine if any correlations existed
                        between chemical species at time t vs t+1. Linear, second order and third order correlations were examined in all cases. 
                        Ever since my first encounter with Python, I have loved programming and have taught myself fundamentals of different languages such as javascript, java & C++. While I mainly work
                        in python and javascript, I am always looking for new opportunities to test my skills with other languages.
                    </p>

                    <p className={styles.text}> 
                        If you have any questions or would like to learn more about my work, feel free to reach out to me. You can find my contact information at the bottom
                        of each page on this site. If you prefer to use LinkedIn, my account is linked in the nav bar above. 
                    </p>
                </div>
                <div className={ColumnStyle.column} >
                    <img className={imagestyles.me} src='../me.jpg' />
                </div>
                
            </body>
        </html>

    )
}

export default AboutMe