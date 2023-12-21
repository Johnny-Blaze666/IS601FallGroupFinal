import '../styles/global.css';
import CookieConsent from "react-cookie-consent";
import Image from "next/image";
import { useState, useEffect } from 'react';
import Script from "next/script";

export default function App({ Component, pageProps }) {
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

    return <>
        <Script
            strategy="afterInteractive"
            src="https://www.googletagmanager.com/gtag/js?id=G-BFJR3JMCGV"
        />
        <Script id="google-analytics" strategy="afterInteractive">
            {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', 'G-BFJR3JMCGV');
            `}
        </Script>
        <Component {...pageProps} />
        <CookieConsent
            debug={true}
            style={{
                background: 'rgba(255,255,255,0.85)',
                borderRadius: '20px',
                width: isSmallScreen ? '100vw' : '90vw',
                margin: isSmallScreen ? '0' : '10px 5vw',
                alignItems: 'center',
                flexDirection: isSmallScreen ? 'column' : 'row',
                padding: isSmallScreen ? '10px' : '20px'
            }}
            buttonStyle={{
                color: 'white',
                background: '#2962FF',
                fontSize: isSmallScreen ? '16px' : '20px',
                height: isSmallScreen ? '50px' : '3rem',
                width: isSmallScreen ? '100px' : '10rem',
                borderRadius: '10px',
                font: 'Roboto',
                letterSpacing: '0.05rem',
                marginTop: isSmallScreen ? '0.5rem' : '0'
            }}
            buttonText='ACCEPT ALL'
            expires={30}
            enableDeclineButton={true}
            declineButtonText='REJECT ALL'
            declineButtonStyle={{
                color: '#37474F',
                background: 'none',
                border: '1px black solid',
                fontSize: isSmallScreen ? '16px' : '20px',
                height: isSmallScreen ? '50px' : '3rem',
                width: isSmallScreen ? '100px' : '10rem',
                borderRadius: '10px',
                font: 'Roboto',
                letterSpacing: '0.05rem',
                marginTop: isSmallScreen ? '0.5rem' : '0'
            }}
            flipButtons
        >
            <div style={{
                display: 'flex',
                alignItems: 'center',
                flexDirection: isSmallScreen ? 'column' : 'row'
            }}>
                <Image
                    src="/images/CookieIcon.svg"
                    alt="Cookie Icon"
                    width={isSmallScreen ? 30 : 50}
                    height={isSmallScreen ? 30 : 50}
                    style={{
                        margin: '0 30px',
                        maxWidth: "100%",
                        height: "auto"
                    }} />
                <div style={{
                    marginRight: isSmallScreen ? '0' : '5vw',
                    textAlign: isSmallScreen ? 'center' : 'left'
                }}>
                    <p style={{color: '#000000', fontSize: '1.5rem', margin: '0'}}>We Value</p>
                    <p style={{color: '#222222', fontSize: '2rem', margin: '0', fontWeight:'700'}}>Your Privacy.</p>
                </div>
                <p style={{
                    color: '#37474F',
                    width: isSmallScreen ? '80vw' : '20vw',
                    textAlign: isSmallScreen ? 'center' : 'left',
                    fontSize: '1rem'
                }}>
                    We collects your data in order to improve your experience in the form of cookies. <a>Learn More</a>
                </p>

            </div>
        </CookieConsent>
    </>;
}
