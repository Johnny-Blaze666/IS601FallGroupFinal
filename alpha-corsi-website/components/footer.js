import styles from "./footer.module.css";
import Link from "next/link";
import SocialMedia from "./socialmedia";



export default function Footer() {
    return (
        <div className={styles.footer} id={"footer"}>
            <div className={styles.footerLinks}>
                <Link href='/services'>Services</Link>
                <Link href='/#contact-us'>Email</Link>
                <Link href='/#contact-us'>Contact us</Link>
                <h2><Link href='/#'>ALPHACORSI</Link></h2>
                <Link href='/about'>About</Link>
                <Link href='/#'>Social</Link>
                <Link href='/#'>Support</Link>
            </div>

            <div className={styles.footerBorder}></div>

            <div className={styles.socialLinks}>
                <SocialMedia image='/images/companies/logos/blogger.svg' link='google' ariaLabel='Blogger'/>
                <SocialMedia image='/images/companies/logos/instagram.svg' link='google' ariaLabel='Instagram'/>
                <SocialMedia image='/images/companies/logos/x.svg' link='google' ariaLabel='X, formerly Twitter'/>
                <SocialMedia image='/images/companies/logos/facebook.svg' link='google' ariaLabel='Facebook'/>
                <SocialMedia image='/images/companies/logos/linkedin.svg' link='google' ariaLabel='LinkedIn'/>
            </div>

            <p className={styles.trademark}>© 2023 AlphaCorsi</p>

        </div>
    )
}