import '../styles/global.css';
import CookieConsent from "react-cookie-consent";

export default function App({ Component, pageProps }) {
  return (
      <>
          <Component {...pageProps} />
          <CookieConsent debug={true}>
              <p>We collects your data in order to improve your experience in the form of cookies.</p>
          </CookieConsent>
      </>
  );
}
