import { useState } from 'react';
import styles from "./footer.module.css";
import Link from "next/link";
import SocialMedia from "./socialmedia";



export default function Footer({ opacity }) {
    const [glow, setGlow] = useState(false);

    const handleSocialClick = (e) => {
        e.preventDefault();
        setGlow(true);
        setTimeout(() => setGlow(false), 1000); // Remove the glow after 1 second
    };

    const handleSupportClick = (e) => {
        alert('Please submit your email address and someone from our customer support team will reach out to you for support');
    }

    return (
        <div className={styles.footer} id={"footer"} style={{ '--opacity': opacity }}>
            <div className={styles.footerLinks}>
                <Link href='/services'>Services</Link>
                <Link href='/#contact-us'>Email</Link>
                <Link href='/signup'>Contact us</Link>
                <h2><Link href='/#'>ALPHACORSI</Link></h2>
                <Link href='/about'>About</Link>
                <Link href='/#socialmedia' onClick={handleSocialClick}>Social</Link>
                <Link href='/#contact-us' onClick={handleSupportClick}>Support</Link>
            </div>

            <div className={styles.footerBorder}></div>

            <div className={styles.socialLinks} id="socialmedia">
                <SocialMedia image='/images/companies/logos/blogger.svg' link='https://blogger.com' ariaLabel='Blogger' glow={glow}/>
                <SocialMedia image='/images/companies/logos/instagram.svg' link='https://instagram.com' ariaLabel='Instagram' glow={glow}/>
                <SocialMedia image='/images/companies/logos/x.svg' link='https://twitter.com' ariaLabel='X, formerly Twitter' glow={glow}/>
                <SocialMedia image='/images/companies/logos/facebook.svg' link='https://facebook.com' ariaLabel='Facebook' glow={glow}/>
                <SocialMedia image='/images/companies/logos/linkedin.svg' link='https://linkedin.com' ariaLabel='LinkedIn' glow={glow}/>
            </div>

            <p className={styles.trademark}>© 2023 AlphaCorsi</p>

        </div>
    )
}