import { useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import styles from '../styles/subscribe.module.css';
import { getSortedPostsData } from '../lib/posts';
import Link from 'next/link';
import Date from '../components/date';
import PartnerCard from '../components/partnerCard';
import ServiceCard from '../components/serviceCard';
import SocialMedia from '../components/socialmedia';
import Footer from '../components/footer';
import { TransitionGroup, CSSTransition } from 'react-transition-group';


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
        } else {
            // Handle success
            console.log('Subscribed!');
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
        </form>
    );
};
export default function Home({ allPostsData }) {
  const partners = [
    { image: "/images/companies/CrowdStrike.png", companyName: "CrowdStrike", companyColor: "#FF0000", link: "/#CrowdStrike" },
    { image: "/images/companies/Microsoft.png", companyName: "Microsoft", useImageSize: 'true', link: "/#Microsoft" },
    { image: "/images/companies/Okta.png", companyName: "Okta", link: "/#Okta" },
    { image: "/images/companies/Taegis.png", companyName: "Taegis", companyColor: "#2B00BB", link: "/#Taegis" },
  ];

  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState('next');

  const handleNext = () => {
    setDirection('next');
    setCurrent((current + 1) % partners.length);
  };

  const handlePrev = () => {
    setDirection('prev');
    setCurrent((current - 1 + partners.length) % partners.length);
  };

  return (
      <Layout home>
        <Head>
          <title>{siteTitle}</title>
        </Head>

        <div className={utilStyles.mainContainer}>
          <div className={utilStyles.hero}>
            <video autoPlay muted loop className={utilStyles.video}>
              <source src="/heroMountainBackground.mp4" type="video/mp4"/>
            </video>

            <div className={utilStyles.heroContent}>
                <h1>AlphaCorsi</h1>
                <p>A boutique Information Security consultancy firm</p>
                <Link href='/#learn-more'>
                    <div className={utilStyles.learnmoreButton}>
                        <p className={utilStyles.learnmoreText}>Learn More</p>
                    </div>
                </Link>
            </div>
          </div>

          <div id="about" className={utilStyles.about}>
            <h3>CyberSecurity Consulting</h3>
            <p>
              At AlphaCorsi, we are your partner in effectively implementing security technologies tailored to your
              organizational needs. Our team of experts can assist in identifying gaps, reducing risk,
              regulatory compliance, vulnerability management and more.
            </p>
          </div>

        <div className={utilStyles.partners}>
            <h3>Our Trusted Partners</h3>
            <p>
                We partner closely with leaders in the cybersecurity industry to deliver the best in class solutions to
                ensure our clients needs are being met
            </p>
            <div className={utilStyles.partnerCardsContainer}>
                <button onClick={handlePrev} className={utilStyles.buttonCircle}>
                    <i className={`${utilStyles.arrow} ${utilStyles.left}`}></i>
                </button>

                <div className={utilStyles.partnerCardsGroup}>
                    <TransitionGroup>
                        <CSSTransition
                            key={current}
                            timeout={300}
                            classNames={{
                                enter: direction === 'next' ? utilStyles.slideEnterFromRight : utilStyles.slideEnterFromLeft,
                                enterActive: utilStyles.slideEnterActive,
                                exit: utilStyles.slideExit,
                                exitActive: direction === 'next' ? utilStyles.slideExitToLeft : utilStyles.slideExitToRight,
                            }}
                        >
                            <div className={utilStyles.partnerCardContainer}>
                                <PartnerCard {...partners[current]} />
                            </div>
                        </CSSTransition>
                    </TransitionGroup>
                </div>

                <button onClick={handleNext} className={utilStyles.buttonCircle}>
                    <i className={`${utilStyles.arrow} ${utilStyles.right}`}></i>
                </button>
            </div>

        </div>

        <div className={utilStyles.services}>
          <div className={utilStyles.accolades}>
            <div className={utilStyles.C10Icon}>
              <Image src="/images/services/c10Icon.png" alt="C10 Review" width={300} height={300} style={{ objectFit: "cover" }} />
            </div>
            <div className={utilStyles.text}>
              <h4>Accolades</h4>
              <p>10 Most Promising Cybersecurity Consulting Companies</p>
              <Link href="/#accolades">Read More</Link>
            </div>

          </div>
          <h3>Services</h3>
          <div className={utilStyles.servicesCards}>
            <ServiceCard image="/images/services/managedSecServProv.png" service="Managed Security Service Provider" link="/#MSSP"
                         tagline="MSSP, Extended Detection and Response, Intrusion Detection/Intrusion Prevention Systems" />
            <ServiceCard image="/images/services/govRiskComp.png" service="Governance, Risk, and Compliance" link="/#GRC"
                         tagline="Gap Assessments, Risk Analysis, Compliance Framework vCISO" />
            <ServiceCard image="/images/services/incidentResponse.png" service="Incident Response" link="/#IR"
                         tagline="Incident Responsse Preparation, Table Top Exercises, Security Breach Guidance" />
            <ServiceCard image="/images/services/penTesting.png" service="Penetration Testing" link="/#PT"
                         tagline="Phishing, Vishing, Social Engineering, Security Controls Assessments" />
          </div>
        </div>

        <div className={utilStyles.testimonials}>
            <div className={utilStyles.testimonial}>
                <h3>
                    "Your penetration test was one of the most comprehensive external tests that were performed
                    against our organization"
                </h3>
                <Image src="/images/people/maryL.png" alt="Mary L photo" width={70} height={70} style={{ objectFit: "cover" }} />
                <p>Mary L., CISO</p>
            </div>

            <div className={utilStyles.testimonial}>
                <h3>
                    "Your team provided us with a new perspective and is considered beyond being compliant with the regulations"
                </h3>
                <Image src="/images/people/kristenR.png" alt="Kristen R photo" width={70} height={70} style={{ objectFit: "cover" }} />
                <p>Kristen R, VP Information Security Manager</p>
            </div>
        </div>

        <div className={utilStyles.contactUs} id="contact-us">
            <div className={utilStyles.contactUs} id="contact-us">
                <SubscribeForm/>
            </div>
        </div>

        <Footer />



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
