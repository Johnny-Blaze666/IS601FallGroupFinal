import Layout, { siteTitle } from '../components/layout';
import Image from 'next/image';
import aboutStyles from '../styles/about.module.css';
import Head from "next/head";
import Link from "next/link";

export default function About() {
    return (
        <Layout about>
            <Head>
                <title>{siteTitle}</title>
            </Head>

            <div className={aboutStyles.mainContainer}>
                <div className={aboutStyles.mainContent}>
                    <div className={aboutStyles.text}>
                        <h1>About AlphaCorsi</h1>
                        <p>Founded in 2023 by experts trusted by US military and Forbes 100 companies investigate, respond and defend against significant cyberattacks. </p>
                        <p>Today, AlphaCorsi is one of the leading Cyber Security Service organizations because of our dedicated team of experts. </p>
                        <p>Our team is passionate about delivering the best quality service to you at lower than average cost. We do not have dedicated sales staff, thus enabling us to deliver valuable service at competitive rates. </p>
                    </div>
                    <div className={aboutStyles.imageContainer}>
                        <Image src='/images/AboutImage.svg' alt='Hiking Snowy Mountain' width={800} height={500} style={{ objectFit: "cover" }} />
                    </div>
                </div>

                <Link href='/#free-trial' className={aboutStyles.button}>
                        <p className={aboutStyles.buttonText}>Start Free Trial</p>
                </Link>
            </div>

        </Layout>
    )
}