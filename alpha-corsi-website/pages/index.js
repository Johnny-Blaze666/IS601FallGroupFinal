import { useState } from 'react';
import Head from 'next/head';
import Image from "next/image";
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import styles from '../styles/subscribe.module.css';
import { getSortedPostsData } from '../lib/posts';
import Link from 'next/link';
import PartnerCard from '../components/partnerCard';
import ServiceCard from '../components/serviceCard';
import Footer from '../components/footer';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// Images
import C10 from '../public/images/services/c10Icon.webp';

// Add this new component for the subscription form
const SubscribeForm = () => {
    const [email, setEmail] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        // Call the API route to handle the subscription
        const response = await fetch('/api/subscribe', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email }),
        });

        const data = await response.json();
        if (data.error) {
            // Handle error
            console.error(data.error);
            alert('Invalid email. Please verify your spelling and submit again.');
        } else {
            // Handle success
            console.log('Subscribed!');
            alert('Email sent! Please check your inbox within 1-3 business days for a response.');
            setEmail(''); // Clear the input field after successful subscription
        }
    };

    return (
        <form onSubmit={handleSubmit} className={styles.form}>
            <label htmlFor="email" className={styles.label}>Let's get in touch</label>
            <input className={styles.input}
                   type="email"
                   placeholder="email"
                   id="email"
                   name="email"
                   value={email}
                   onChange={(e) => setEmail(e.target.value)}
                   required
            />
            <button type="submit" className={styles.button}>Contact Us</button>
            <p style={{fontSize: '0.8rem', color: '#666'}}>
                By providing your email, you agree that we may process your information in accordance with our <Link href='/terms'>Privacy Policy</Link>. We will use your email to send you marketing communications, which you can unsubscribe from at any time by clicking the link in the footer of our emails.
            </p>
        </form>
    );
};
export default function Home({ allPostsData }) {
  return (
      <Layout home>
        <Head>
          <title>{siteTitle}</title>
        </Head>

        <div className={utilStyles.mainContainer}>
          <div className={utilStyles.hero}>
            <video autoPlay muted loop playsInline className={utilStyles.video} onContextMenu={(e) => e.preventDefault()} onPlay={(e) => { e.target.controls = false; }}>
              <source src="/heroMountainBackground.webm" type="video/webm"/>
            </video>

            <div className={utilStyles.heroContent}>
                <h1>AlphaCorsi</h1>
                <p>A boutique Information Security consultancy firm</p>
                <Link href='/about' aria-label="Who are we">
                    <div className={utilStyles.learnmoreButton}>
                        <p className={utilStyles.learnmoreText}>Who Are We</p>
                    </div>
                </Link>
            </div>
          </div>

          <div id="about" className={utilStyles.about}>
              <h1></h1>
              <h2></h2>
            <h3>CyberSecurity Consulting</h3>
            <p>
              At AlphaCorsi, we are your partner in effectively implementing security technologies tailored to your
              organizational needs. Our team of experts can assist in identifying gaps, reducing risk,
              regulatory compliance, vulnerability management and more.
            </p>
          </div>

        <div className={utilStyles.partners}>
            <h1></h1>
            <h2></h2>
            <h3>Our Trusted Partners</h3>
            <p>
                We partner closely with leaders in the cybersecurity industry to deliver the best in class solutions to
                ensure our clients needs are being met
            </p>
            <div className={utilStyles.partnerCardsContainer}>

                <div style={{width:'250px'}}>
                    <Swiper style={{
                        "--swiper-theme-color": "black",
                        "--swiper-pagination-bottom": "25px"
                    }}
                        modules={[Navigation, Pagination]}
                        spaceBetween={50}
                        navigation
                        autoplay={true}
                        pagination={{ clickable: true }}
                        slidesPerView={1}
                        onSlideChange={() => console.log('slide change')}
                        onSwiper={(swiper) => console.log(swiper)}
                    >
                        <SwiperSlide><PartnerCard image='/images/companies/CrowdStrike.svg' companyName='CrowdStrike' link='https://www.crowdstrike.com/' companyColor='#FF0000' externalLink={true} /></SwiperSlide>
                        <SwiperSlide><PartnerCard image='/images/companies/Microsoft.svg' companyName='Microsoft' link='https://www.microsoft.com/en-us/' externalLink={true}/></SwiperSlide>
                        <SwiperSlide><PartnerCard image='/images/companies/Okta.svg' companyName='Okta' link='https://www.okta.com' externalLink={true}/></SwiperSlide>
                        <SwiperSlide><PartnerCard image='/images/companies/Taegis.svg' companyName='Taegis' link='https://www.secureworks.com/products/managedxdr' externalLink={true}/></SwiperSlide>
                    </Swiper>
                </div>

            </div>

        </div>

        <div className={utilStyles.services}>
          <div className={utilStyles.accolades}>
            <div className={utilStyles.C10Icon}>
              <Image
                  src={C10}
                  alt="C10 Review"
                  width={300}
                  height={300}
                  style={{
                      objectFit: "cover",
                      maxWidth: "100%",
                      height: "auto"
                  }} />
            </div>
            <div className={utilStyles.text}>
                <h1></h1>
                <h2></h2>
                <h3></h3>
              <h4>Accolades</h4>
              <p>10 Most Promising Cybersecurity Consulting Companies</p>
            </div>

          </div>
            <h1></h1>
            <h2></h2>
          <h3>Services</h3>
          <div className={utilStyles.servicesCards}>
            <ServiceCard image="/images/services/managedSecServProv.webp" service="Managed Security Service Provider" link="/services/mssp"
                         tagline="MSSP, Extended Detection and Response, Intrusion Detection/Intrusion Prevention Systems" aria="Managed Security Service Provider"/>
            <ServiceCard image="/images/services/govRiskComp.webp" service="Governance, Risk, and Compliance" link="/services/grc"
                         tagline="Gap Assessments, Risk Analysis, Compliance Framework vCISO" aria="Governance, Risk, and Compliance"/>
            <ServiceCard image="/images/services/incidentResponse.webp" service="Incident Response" link="/services/incidentresponse"
                         tagline="Incident Responsse Preparation, Table Top Exercises, Security Breach Guidance" aria="Incident Response"/>
            <ServiceCard image="/images/services/penTesting.webp" service="Penetration Testing" link="/services/pentesting"
                         tagline="Phishing, Vishing, Social Engineering, Security Controls Assessments" aria="Penetration Testing"/>
          </div>
            <Link href='/services' className={utilStyles.servicesLinkButton}>View All</Link>
        </div>

        <div className={utilStyles.testimonials}>
            <div className={utilStyles.testimonial}>
                <h1></h1>
                <h2></h2>
                <h3>
                    "Your penetration test was one of the most comprehensive external tests that were performed
                    against our organization"
                </h3>
                <Image
                    src="/images/people/maryL.png"
                    alt="Mary L photo"
                    width={70}
                    height={70}
                    style={{
                        objectFit: "cover",
                        maxWidth: "100%",
                        height: "auto"
                    }} />
                <p>Mary L., CISO</p>
            </div>

            <div className={utilStyles.testimonial}>
                <h1></h1>
                <h2></h2>
                <h3>
                    "Your team provided us with a new perspective and is considered beyond being compliant with the regulations"
                </h3>
                <Image
                    src="/images/people/kristenR.png"
                    alt="Kristen R photo"
                    width={70}
                    height={70}
                    style={{
                        objectFit: "cover",
                        maxWidth: "100%",
                        height: "auto"
                    }} />
                <p>Kristen R, VP Information Security Manager</p>
            </div>
        </div>

        <div className={utilStyles.contactUs} id="contact-us">
            <div className={utilStyles.contactUs} id="contact-us">
                <SubscribeForm/>
            </div>
        </div>

        <Footer opacity={1}/>



        </div>
      </Layout>
  );
}

export async function getStaticProps() {
    const allPostsData = getSortedPostsData();
    return {
        props: {
            allPostsData,
        },
    };
}
