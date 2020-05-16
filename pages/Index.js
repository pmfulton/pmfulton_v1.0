import NavBar from '../components/Nav.js'
import Tab from '../components/Tab.js'
import HeadingStyles from '../public/css_modules/Headers.module.css'


function HomePage() {
    return (
        <html>
            <Tab title="Home" />
            <body>
                <div>
                    <h1 className={HeadingStyles.heading}> Peter Fulton - Aspiring Full Stack Engineer</h1>
                    <NavBar />
                </div>
            </body>
        </html>

    )
}

export default HomePage