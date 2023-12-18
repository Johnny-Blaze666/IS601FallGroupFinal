import '../styles/global.css';
import CookieConsent from "react-cookie-consent";
import Image from 'next/image';

export default function App({ Component, pageProps }) {
  return (
      <>
          <Component {...pageProps} />
          <CookieConsent
              debug={true}
              style={{
                  background: 'rgba(255,255,255,0.85)',
                  borderRadius: '20px',
                  width: '90vw',
                  margin: '10px 5vw',
                  alignItems: 'center'
              }}
              buttonStyle={{
                  color: 'white',
                  background: '#2962FF',
                  fontSize: '20px',
                  height: '3rem',
                  width: '10rem',
                  borderRadius: '10px',
                  font: 'Roboto',
                  letterSpacing: '0.05rem'
              }}
              buttonText='ACCEPT ALL'
              expires={30}
              enableDeclineButton={true}
              declineButtonText='REJECT ALL'
              declineButtonStyle={{
                  color: '#37474F',
                  background: 'none',
                  fontSize: '20px',
                  height: '3rem',
                  width: '10rem',
                  borderRadius: '10px',
                  font: 'Roboto',
                  letterSpacing: '0.05rem'
              }}
              flipButtons
          >
              <div style={{display: 'flex', alignItems: 'center'}}>
                  <Image src="images/CookieIcon.svg" alt="Cookie Icon" width={50} height={50} style={{margin: '0 30px'}}/>
                  <div style={{marginRight: '5vw'}}>
                      <p style={{color: '#000000', fontSize: '1.5rem', margin: '0'}}>We Value</p>
                      <p style={{color: '#222222', fontSize: '2rem', margin: '0', fontWeight:'700'}}>Your Privacy.</p>
                  </div>
                  <p style={{color: '#37474F', width: '20vw'}}>We collects your data in order to improve your experience in the form of cookies.</p>
              </div>
          </CookieConsent>
      </>
  );
}
