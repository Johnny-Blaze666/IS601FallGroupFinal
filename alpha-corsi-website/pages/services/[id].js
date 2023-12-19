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

      <div className={utilStyles.servicePageContent}>
        <h1 className={utilStyles.serviceTitle}>{postData.titleLong}</h1>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
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
