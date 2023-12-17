import utilStyles from "../styles/utils.module.css";
import Link from "next/link";
import SocialMedia from "./socialmedia";



export default function Footer() {
    return (
        <div className={utilStyles.footer} id={"footer"}>
            <div className={utilStyles.footerLinks}>
                <Link href='/#'>Services</Link>
                <Link href='/#'>Email</Link>
                <Link href='/#'>Contact us</Link>
                <h2><Link href='/#'>ALPHACORSI</Link></h2>
                <Link href='/#'>About</Link>
                <Link href='/#'>Social</Link>
                <Link href='/#'>Support</Link>
            </div>

            <div className={utilStyles.footerBorder}></div>

            <div className={utilStyles.socialLinks}>
                <SocialMedia image='/images/companies/logos/blogger.svg' link='google' ariaLabel='Blogger'/>
                <SocialMedia image='/images/companies/logos/instagram.svg' link='google' ariaLabel='Instagram'/>
                <SocialMedia image='/images/companies/logos/x.svg' link='google' ariaLabel='X, formerly Twitter'/>
                <SocialMedia image='/images/companies/logos/facebook.svg' link='google' ariaLabel='Facebook'/>
                <SocialMedia image='/images/companies/logos/linkedin.svg' link='google' ariaLabel='LinkedIn'/>
            </div>

        </div>
    )
}