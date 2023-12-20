import Layout from '../../components/layout';
import { getAllPostIds, getPostData } from '../../lib/posts';
import Head from 'next/head';
import utilStyles from '../../styles/utils.module.css';
import Image from 'next/image';

export default function Post({ postData }) {
  return (
    <Layout>
      <Head>
        <title>AlphaCorsi {postData.title}</title>
      </Head>

        <div className={utilStyles.servicePageBackground}>
            <div className={utilStyles.servicePageSubBackground}
                 style={{
                     backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.2)), url(${postData.imagePath})`,
                     backgroundRepeat: 'no-repeat',
                     backgroundSize: 'contain',
                     backgroundPosition: 'left'}}>
                <div className={utilStyles.servicePageEmptyLeft}></div>
                <div className={utilStyles.servicePageContent}>
                    <div className={utilStyles.servicePageContentText}>
                        <h1 className={utilStyles.serviceTitle}>{postData.titleLong}</h1>
                        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} style={{marginTop: '10%'}} />
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
