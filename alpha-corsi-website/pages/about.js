import Layout, { companyName } from '../components/layout';
import Image from "next/image";
import aboutStyles from '../styles/about.module.css';
import Head from "next/head";
import Link from "next/link";
import AboutImage from "../public/images/AboutImage.png"

export default function About() {
    return (
        <Layout about>
            <Head>
                <title>{companyName} About</title>
            </Head>

            <div className={aboutStyles.mainContainer}>
                <div className={aboutStyles.mainContent}>
                    <div className={aboutStyles.text}>
                        <h1>About AlphaCorsi</h1>
                        <p>Founded in 2023 by experts trusted by the US Military and Forbes 100 companies.</p>
                        <p>AlphaCorsi investigates, responds and defends against significant cyberattacks</p>
                        <p>Our team is passionate about delivering the best quality service to you at lower than average cost. We do not have dedicated sales staff, thus enabling us to deliver valuable service at competitive rates. </p>
                    </div>
                    <div className={aboutStyles.imageContainer}>
                        <Image
                            priority={true}
                            src={AboutImage}
                            alt='Hiking Snowy Mountain'
                            width={800}
                            height={500}
                            style={{
                                objectFit: "cover",
                                maxWidth: "100%",
                                height: "auto"
                            }} />
                    </div>
                </div>

                <div className={aboutStyles.buttonContainer}>
                    <Link href='/signup' className={aboutStyles.button}>
                        <p className={aboutStyles.buttonText}>Start Free Trial</p>
                    </Link>
                </div>
            </div>

        </Layout>
    );
}