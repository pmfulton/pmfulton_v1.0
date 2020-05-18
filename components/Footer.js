import footerstyles from '../public/css_modules/Footer.module.css'


function Footer() {
    return (
        <footer className={footerstyles.footer}>
            <p>Created using the next.js framework.</p>
            <p>Contact me: <a href="mailto: pfulton423@gmail.com">pfulton423@gmail.com</a></p>
        </footer>
    )
}

export default Footer