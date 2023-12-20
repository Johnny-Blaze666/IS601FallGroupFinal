import Layout, { companyName } from '../components/layout';
import styles from '../styles/terms.module.css';
import Head from "next/head";

export default function Terms() {
    return (
        <Layout about>
            <Head>
                <title>{companyName} Terms and Conditions</title>
            </Head>

            <div className={styles.mainContainer}>
                <div className={styles.mainContent}>
                    <h1>GDPR Compliance Document</h1>

                    <h2>Introduction</h2>
                    <p>This document outlines our commitment to the General Data Protection Regulation (GDPR). We use cookies and Mailchimp to maintain communications, send marketing emails, and provide good service.</p>

                    <h2>Cookies</h2>
                    <p>We use cookies on our website to improve user experience and provide personalized services. These cookies may track information such as how long you spend on the site and the pages that you visit. We use this information to help us improve our website and services.</p>

                    <h2>Mailchimp</h2>
                    <p>We use Mailchimp, a third-party service, for our email communications. When you sign up for our services, your email address and any other information you provide will be transferred to Mailchimp for processing in accordance with their Privacy Policy and Terms.</p>

                    <h2>Your Rights</h2>
                    <p>Under GDPR, you have several rights including:</p>
                    <ul>
                        <li>The right to be informed about how your personal data is being used.</li>
                        <li>The right to access the personal data we hold about you.</li>
                        <li>The right to request the correction of inaccurate personal data we hold about you.</li>
                        <li>The right to request that we delete your data, or stop processing it or collecting it, in some circumstances.</li>
                        <li>The right to stop direct marketing messages.</li>
                        <li>The right to withdraw consent for any consent-based processing at any time.</li>
                    </ul>
                    <p>For more information on your rights under the GDPR, see <a href="https://gdpr-info.eu/chapter-3/">here</a>.</p>

                    <h2>Contact Us</h2>
                    <p>If you have any questions about this document or our approach to GDPR compliance, please contact us.</p>
                </div>
            </div>

        </Layout>
    );
}