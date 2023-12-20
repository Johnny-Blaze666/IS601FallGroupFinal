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
            checkbox1: false,
            checkbox2: false,
            checkbox3: false
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
                            <input type="checkbox" name="checkbox1" checked={formState.checkboxGroup.checkbox1} onChange={handleCheckboxChange} /> Checkbox 1
                        </label>
                        <label>
                            <input type="checkbox" name="checkbox2" checked={formState.checkboxGroup.checkbox2} onChange={handleCheckboxChange} /> Checkbox 2
                        </label>
                        <label>
                            <input type="checkbox" name="checkbox3" checked={formState.checkboxGroup.checkbox3} onChange={handleCheckboxChange} /> Checkbox 3
                        </label>
                        <button type="submit">Submit</button>
                    </form>
                </div>
            </div>
        </Layout>
    )
}
