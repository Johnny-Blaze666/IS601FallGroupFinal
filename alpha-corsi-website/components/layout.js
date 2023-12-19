import Head from 'next/head';
import Image from 'next/image';
import Script from 'next/script';
import styles from './layout.module.css';
import Link from 'next/link';
export const companyName = 'AlphaCorsi';
export const siteTitle = companyName + ' Security';

export default function Layout({ children, home }) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="AlphaCorsi"
          content="Secure your business with an extensive array of services."
        />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle,
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.zeit.co%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <header className={styles.header}>
        <nav className={styles.navbar}>
            <div className={styles.leftNav}>
                <Link href='/' className={styles.alphacorsiNav}>ALPHACORSI</Link>
                <Link href='/services' className={styles.otherNav}>Services</Link>
                <Link href='/about' className={styles.otherNav}>About</Link>
                <Link href='/#follow-us' className={styles.otherNav}>Follow Us</Link>
            </div>

            <Link href='/#contact-us' className={styles.rightNavButton}>
                <div>
                    <p className={styles.contactUsNav}>Contact Us</p>
                </div>
            </Link>

        </nav>
      </header>
      <main>{children}</main>
    </div>
  );
}
