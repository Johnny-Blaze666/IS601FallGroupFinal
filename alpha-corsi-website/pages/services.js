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
                <ServiceCardSignup
                    service='Compliance'
                    image='/images/services/compliance.svg'
                    caption='We will assist you in assessing and maintaining regulatory compliance.'
                    link='/services'/>
                <ServiceCardSignup
                    service='Risk Analysis'
                    image='/images/services/riskAnalysis.svg'
                    caption='Our threat analysis and quantitative models will help you better understand the risks to your organization'
                    link='/services'/>
                <ServiceCardSignup
                    service='Identity and Access Management'
                    image='/images/services/IAM.svg'
                    caption='Onboarding, Offboarding, Privileged Access Management, or implementing a zero trust strategy. '
                    link='/services'/>
                <ServiceCardSignup
                    service='Cloud Security Assessments'
                    image='/images/services/cloudSecAssessments.svg'
                    caption='Our Azure and AWS experts can help you deploy and ensure your cloud systems are secure.'
                    link='/services'/>
                <ServiceCardSignup
                    service='Incident Response'
                    image='/images/services/incidentResponse.svg'
                    caption='Developing an IR Plan, Tabletop exercises, Threat Hunting, responding to breeches and communications.'
                    link='/services'/>
                <ServiceCardSignup
                    service='Managed Security Services'
                    image='/images/services/managedSecServices.svg'
                    caption='Our security operations team provides 24/7/365 support to analyze events and potential threats to you organization. '
                    link='/services'/>
                <ServiceCardSignup
                    service='Information Security Support'
                    image='/images/services/infoSecSupport.svg'
                    caption='Our Security Engineers will support and implement security controls ensure accurate configuration and up to date controls. '
                    link='/services'/>
            </div>

        </Layout>
    )
}