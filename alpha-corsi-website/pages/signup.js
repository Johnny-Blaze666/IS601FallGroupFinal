import { useState, useEffect } from 'react'
import Layout, { companyName } from '../components/layout';
import styles from '../styles/signup.module.css';
import Head from "next/head";
import Select from 'react-select';
import { useRouter } from 'next/router'


export default function Signup() {
    const router = useRouter()
    const { service } = router.query

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
            IncidentResponse: false,
            penTesting: false,
            MSSP: false,
            informationSecuritySupport: false
        }
    });

    useEffect(() => {
        if (service) {
            setFormState(prevState => ({
                ...prevState,
                checkboxGroup: {
                    ...prevState.checkboxGroup,
                    [service]: true
                }
            }));
        }
    }, [service]);

    const options = [
        { value: 'governance', label: 'Governance' },
        { value: 'compliance', label: 'Compliance' },
        { value: 'riskAnalysis', label: 'Risk Analysis' },
        { value: 'penTesting', label: 'Penetration Testing' },
        { value: 'IAM', label: 'Identity Access Management' },
        { value: 'cloudSecurityAssessments', label: 'Cloud Security Assessments' },
        { value: 'IncidentResponse', label: 'Incident Response' },
        { value: 'MSSP', label: 'Managed Security Services' },
        { value: 'informationSecuritySupport', label: 'Information Security Support' },
    ];

    const defaultOption = options.find(option => option.value === service);

    const handleChange = (e) => {
        setFormState({
            ...formState,
            [e.target.name]: e.target.value
        });
    };

    const handleSelectChange = (selectedOptions) => {
        // Create an object with the selected options as keys and true as values
        const selectedServices = selectedOptions.reduce((services, option) => {
            services[option.value] = true;
            return services;
        }, {});

        // Update your form state
        setFormState({
            ...formState,
            checkboxGroup: selectedServices
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
                        <div className={styles.textContent}>
                            <p>Have more questions?</p>
                            <p>Let's get in touch!</p>
                        </div>
                    </div>

                    <form onSubmit={handleSubmit} className={styles.form}>
                        <h2>Contact Us</h2>
                        <div className={styles.formInputs}>
                            <label className={styles.label}>
                                <p>First Name*</p>
                                <input type="text" name="firstName" onChange={handleChange} required className={styles.input}/>
                            </label>
                            <label className={styles.label}>
                                <p>Last Name*</p>
                                <input type="text" name="lastName" onChange={handleChange} required className={styles.input}/>
                            </label>
                            <label className={styles.label}>
                                <p>Email Address*</p>
                                <input type="email" name="email" onChange={handleChange} required className={styles.input}/>
                            </label>
                            <label className={styles.label}>
                                <p>Phone Number</p>
                                <input type="tel" name="phoneNumber" onChange={handleChange} className={styles.input}/>
                            </label>
                            <label className={styles.label}>
                                <p>City</p>
                                <input type="text" name="city" onChange={handleChange} className={styles.input}/>
                            </label>
                            <label className={styles.label}>
                                <p>State</p>
                                <input type="text" name="state" onChange={handleChange} className={styles.input}/>
                            </label>
                        </div>

                        <div className={styles.selectServices}>
                            <div style={{width: '100%'}}>
                                <p>How can we help you?</p>
                            </div>

                            <div className={styles.servicesDropdown} style={{width: '100%'}}>
                                <Select
                                    className={styles.formCheckboxes}
                                    options={options}
                                    isMulti
                                    closeMenuOnSelect={false}
                                    onChange={handleSelectChange}
                                    defaultValue={defaultOption}
                                />
                            </div>
                        </div>

                        <button type="submit"  className={styles.button}>Get Started</button>
                    </form>

                </div>
            </div>
        </Layout>
    )
}
