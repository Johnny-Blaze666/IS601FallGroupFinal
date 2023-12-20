import { useState } from 'react';
import Layout, { companyName } from '../components/layout';
import Image from 'next/image';
import styles from '../styles/signup.module.css';
import Head from "next/head";
import Link from "next/link";

export default function Signup() {
    const [formState, setFormState] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        city: '',
        state: '',
        checkboxGroup: {
            governance: false,
            compliance: false,
            riskAnalysis: false,
            IAM: false,
            cloudSecurityAssessments: false,
            incidentResponse: false,
            managedSecurityServices: false,
            informationSecuritySupport: false
        }
    });

    const handleChange = (e) => {
        setFormState({
            ...formState,
            [e.target.name]: e.target.value
        });
    };

    const handleCheckboxChange = (e) => {
        setFormState({
            ...formState,
            checkboxGroup: {
                ...formState.checkboxGroup,
                [e.target.name]: e.target.checked
            }
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Create a CSV list of the checked checkboxes
        const services = Object.entries(formState.checkboxGroup)
            .filter(([key, value]) => value)
            .map(([key, value]) => key)
            .join(',');

        // Send a POST request with the form data
        const response = await fetch('/api/subscribe', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ ...formState, services }),
        });

        // Handle the response...
    };

    return (
        <Layout signup>
            <Head>
                <title>{companyName} Sign-Up</title>
            </Head>
            <div className={styles.mainContainer}>
                <div className={styles.content}>
                    <div className={styles.leftContent}>
                        <div className={styles.imageContent}>
                            <h1>Ready to Get Started?</h1>
                        </div>
                        <p>Have more questions?</p>
                        <p>Let's get in touch!</p>
                    </div>
                    <form onSubmit={handleSubmit}>
                        <input type="text" name="firstName" onChange={handleChange} placeholder="First Name" required />
                        <input type="text" name="lastName" onChange={handleChange} placeholder="Last Name" required />
                        <input type="email" name="email" onChange={handleChange} placeholder="Email Address" required />
                        <input type="tel" name="phoneNumber" onChange={handleChange} placeholder="Phone Number" />
                        <input type="text" name="city" onChange={handleChange} placeholder="City" required />
                        <input type="text" name="state" onChange={handleChange} placeholder="State" required />
                        <label>
                            <input type="checkbox" name="governance" checked={formState.checkboxGroup.governance} onChange={handleCheckboxChange} /> Governance
                        </label>
                        <label>
                            <input type="checkbox" name="compliance" checked={formState.checkboxGroup.compliance} onChange={handleCheckboxChange} /> Compliance
                        </label>
                        <label>
                            <input type="checkbox" name="riskAnalysis" checked={formState.checkboxGroup.riskAnalysis} onChange={handleCheckboxChange} /> Risk Analysis
                        </label>
                        <label>
                            <input type="checkbox" name="IAM" checked={formState.checkboxGroup.IAM} onChange={handleCheckboxChange} /> Identity and Access Management
                        </label>
                        <label>
                            <input type="checkbox" name="cloudSecurityAssessments" checked={formState.checkboxGroup.cloudSecurityAssessments} onChange={handleCheckboxChange} /> Cloud Security Assessments
                        </label>
                        <label>
                            <input type="checkbox" name="incidentResponse" checked={formState.checkboxGroup.incidentResponse} onChange={handleCheckboxChange} /> Incident Response
                        </label>
                        <label>
                            <input type="checkbox" name="managedSecurityServices" checked={formState.checkboxGroup.managedSecurityServices} onChange={handleCheckboxChange} /> Incident Response
                        </label>
                        <label>
                            <input type="checkbox" name="informationSecuritySupport" checked={formState.checkboxGroup.informationSecuritySupport} onChange={handleCheckboxChange} /> Information Security Support
                        </label>
                        <button type="submit">Submit</button>
                    </form>
                </div>
            </div>
        </Layout>
    )
}
