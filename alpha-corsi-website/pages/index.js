import { useState } from 'react';
import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import { getSortedPostsData } from '../lib/posts';
import Link from 'next/link';
import Date from '../components/date';
import PartnerCard from '../components/partnerCard';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

export default function Home({ allPostsData }) {
  const partners = [
    { image: "/images/companies/crowdstrike.png", companyName: "CrowdStrike", companyColor: "#FF0000", link: "/#CrowdStrike" },
    { image: "/images/companies/microsoft.png", companyName: "Microsoft", useImageSize: 'true', link: "/#Microsoft" },
    { image: "/images/companies/okta.png", companyName: "Okta", link: "/#Okta" },
    { image: "/images/companies/taegis.png", companyName: "Taegis", companyColor: "#2B00BB", link: "/#Taegis" },
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
              <div className={utilStyles.learnmoreButton}>
                <Link href='/#learn-more' className={utilStyles.learnmoreText}>Learn More</Link>
              </div>
            </div>
          </div>

          <div className={utilStyles.about}>
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
