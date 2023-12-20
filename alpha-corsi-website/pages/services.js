import Layout, { companyName } from '../components/layout';
import ServiceCardSignup from '../components/serviceCardSignup';
import Image from "next/image";
import servicesStyles from '../styles/services.module.css';
import Footer from '../components/footer';
import Head from "next/head";
import Link from "next/link";

export default function Services() {
    return (
        <Layout services>
            <Head>
                <title>{companyName} Services</title>
            </Head>

            <div className={servicesStyles.mainContainer}>
                <div className={servicesStyles.headerText}>
                    <h1>Our Consulting Services</h1>
                    <p>From Information Security Systems Engineering to Social Engineering and Strategic Planning, our team of experts is here to help you at every step.</p>
                    <p>Whether you need to develop roadmap for the future or implement and assess your controls, contact us today to learn more.</p>
                </div>
                <div className={servicesStyles.cards}>
                    <ServiceCardSignup
                        service='Governance'
                        image='/images/services/governance.svg'
                        caption='Get more insight on your assets by identifying and protecting the crown jewels of your organization.'
                        link='/signup?service=governance'/>
                    <ServiceCardSignup
                        service='Compliance'
                        image='/images/services/compliance.svg'
                        caption='We will assist you in assessing and maintaining regulatory compliance.'
                        link='/signup?service=compliance'/>
                    <ServiceCardSignup
                        service='Risk Analysis'
                        image='/images/services/riskAnalysis.svg'
                        caption='Our threat analysis and quantitative models will help you better understand the risks to your organization'
                        link='/signup?service=riskAnalysis'/>
                    <ServiceCardSignup
                        service='Penetration Testing'
                        image='/images/services/penTestingService.png'
                        caption='Our threat analysis and quantitative models will help you better understand the risks to your organization'
                        link='/signup?service=penTesting'/>
                    <ServiceCardSignup
                        service='Identity and Access Management'
                        image='/images/services/IAM.svg'
                        caption='Onboarding, Offboarding, Privileged Access Management, or implementing a zero trust strategy. '
                        link='/signup?service=IAM'/>
                    <ServiceCardSignup
                        service='Cloud Security Assessments'
                        image='/images/services/cloudSecAssessments.svg'
                        caption='Our Azure and AWS experts can help you deploy and ensure your cloud systems are secure.'
                        link='/signup?service=cloudSecurityAssessments'/>
                    <ServiceCardSignup
                        service='Incident Response'
                        image='/images/services/incidentResponse.svg'
                        caption='Developing an IR Plan, Tabletop exercises, Threat Hunting, responding to breeches and communications.'
                        link='/signup?service=IncidentResponse'/>
                    <ServiceCardSignup
                        service='Managed Security Services'
                        image='/images/services/managedSecServices.svg'
                        caption='Our security operations team provides 24/7/365 support to analyze events and potential threats to you organization. '
                        link='/signup?service=MSSP'/>
                    <ServiceCardSignup
                        service='Information Security Support'
                        image='/images/services/infoSecSupport.svg'
                        caption='Our Security Engineers will support and implement security controls ensure accurate configuration and up to date controls. '
                        link='/signup?service=informationSecuritySupport'/>
                </div>
                <div className={servicesStyles.callToAction}>
                    <h2>Ready to get started?</h2>
                    <p>Contact us for a free consultation on our services.</p>
                    <Link href="/services/#contact-us" className={servicesStyles.link}>Contact Us</Link>
                </div>
                <div className={servicesStyles.footerCustomStyling}>
                    <Footer opacity={0.75}/>
                </div>

            </div>

        </Layout>
    )
}