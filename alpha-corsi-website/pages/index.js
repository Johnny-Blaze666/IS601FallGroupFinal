import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import { getSortedPostsData } from '../lib/posts';
import Link from 'next/link';
import Date from '../components/date';

export default function Home({ allPostsData }) {
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
            At AlphaCorsi, we are your partner in effectively implementing  security technologies tailored to your
            organizational needs. Our team of experts can assist in identifying gaps, reducing risk,
            regulatory compliance, vulnerability management and more.
          </p>
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
