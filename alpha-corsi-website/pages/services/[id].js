import Layout from '../../components/layout';
import { getAllPostIds, getPostData } from '../../lib/posts';
import Head from 'next/head';
import utilStyles from '../../styles/utils.module.css';
import Image from "next/legacy/image";
import Link from "next/link";
import { useState, useEffect } from 'react';

export default function Post({ postData }) {
    const [isSmallScreen, setIsSmallScreen] = useState(false);

    useEffect(() => {
        const checkScreenSize = () => {
            setIsSmallScreen(window.innerWidth < 768);
        };

        // Check screen size on initial render
        checkScreenSize();

        // Check screen size whenever the window is resized
        window.addEventListener('resize', checkScreenSize);

        // Clean up event listener on unmount
        return () => window.removeEventListener('resize', checkScreenSize);
    }, []);

  return (
    <Layout>
      <Head>
        <title>AlphaCorsi {postData.title}</title>
      </Head>

        <div className={utilStyles.servicePageBackground}>
            <div className={utilStyles.servicePageSubBackground}
                 style={{
                     backgroundImage: isSmallScreen ? 'none' : `linear-gradient(rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.2)), url(${postData.imagePath})`,
                     backgroundRepeat: 'no-repeat',
                     backgroundSize: 'contain',
                     backgroundPosition: 'left'}}>
                <div className={utilStyles.servicePageEmptyLeft}></div>
                <div className={utilStyles.servicePageContent}>
                    <div className={utilStyles.servicePageContentText}>
                        <h1 className={utilStyles.serviceTitle}>{postData.titleLong}</h1>
                        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} style={{marginTop: '10%', paddingBottom: '15%'}} />
                        <Link href={`/signup?service=${postData.title}`} className={utilStyles.servicesLinkButton}>
                            Sign Up
                        </Link>
                    </div>
                </div>
            </div>
        </div>

    </Layout>
  );
}

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
}
