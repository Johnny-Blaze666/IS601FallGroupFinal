import Layout, { companyName } from '../components/layout';
import ServiceCardSignup from '../components/serviceCardSignup';
import Image from 'next/image';
import aboutStyles from '../styles/about.module.css';
import Head from "next/head";
import Link from "next/link";

export default function Services() {
    return (
        <Layout services>
            <Head>
                <title>{companyName} Services</title>
            </Head>

            <div className={aboutStyles.mainContainer}>
                <ServiceCardSignup
                    service='Governance'
                    image='/images/services/governance.svg'
                    caption='Get more insight on your assets by identifying and protecting the crown jewels of your organization.'
                    link='/services'/>
            </div>

        </Layout>
    )
}