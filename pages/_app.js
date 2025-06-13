import "../public/assets/static/css/globals.css";
import HTMLHead from "../components/layout/partials/head.js";
import { StoreProvider } from "../context/store";
import React from "react";
import Script from 'next/script'
import * as fbq from '../libs/fpixel'

const DisableSSR = ({ children }) => {
  return (
    <div suppressHydrationWarning>
      {typeof window === "undefined" ? null : children}
    </div>
  );
};

function MyApp({ Component, pageProps, nonce, csp }) {
  const [windowLoaded, setWindowLoaded] = React.useState(false);
  if (nonce) global.nonce = nonce;

  if (typeof window !== "undefined")
    window.__webpack_nonce__ = nonce["style-src"];

  const removePreloader = React.useCallback(() => {
    let __i = setInterval(() => {
      try {
        if (typeof window !== "undefined" && __i) {
          window.onload = function () {
            const element = document.getElementById("preloader");
            if (element) element.remove();
          };
          setTimeout(() => {
            const element = document.getElementById("preloader");
            if (element) element.remove();
          }, 2000);
          clearInterval(__i);
          __i = null;
        }
      } catch (err) {}
    }, 500);
  });

  React.useEffect(() => {

    removePreloader();
    if (!windowLoaded) {
      setTimeout(() => {
        setWindowLoaded(typeof window !== "undefined");
      });
    }
  }, [removePreloader, setWindowLoaded, windowLoaded]);

  if (!windowLoaded) {
    return (
      <>
        <HTMLHead nonce={nonce} csp={csp} />
        <div id="preloader"></div>
     
      {/* Global Site Code Pixel - Facebook Pixel */}
      {/* <Script
        id="fb-pixel"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '1357374798511837');  1357374798511837
            fbq('track', 'PageView');
          `,
        }}
      />
      <Component {...pageProps} /> */}
    </>


    );
  } else {
    return (
      <>
        <HTMLHead nonce={nonce} csp={csp} />
        <div id="preloader"></div>
        <Script
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
      />

      <Script id="google-analytics-script" strategy="lazyOnload">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}', {
          page_path: window.location.pathname,
          });
    `}
      </Script>
       
          <Script id="facebook-pixel">
      {`
        !function(f,b,e,v,n,t,s)
        {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
        n.callMethod.apply(n,arguments):n.queue.push(arguments)};
        if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
        n.queue=[];t=b.createElement(e);t.async=!0;
        t.src=v;s=b.getElementsByTagName(e)[0];
        s.parentNode.insertBefore(t,s)}(window, document,'script',
        'https://connect.facebook.net/en_US/fbevents.js');
        fbq('init', ${fbq.FB_PIXEL_ID});
        fbq('track', 'PageView');
      `}
    </Script>
     
      
        <DisableSSR>
          <StoreProvider>
            <Component {...pageProps} />
          </StoreProvider>
        </DisableSSR>
      </>
    );
  }
}

MyApp.getInitialProps = async (props) => {
  const { req, res } = props.ctx;
  const nonce = {};

  res
    ?.getHeaders()
    ["content-security-policy"]?.split(";")
    .filter(Boolean)
    .forEach((part) => {
      const [directive, ...source] = part.split(" ");
      source.map((s) => {
        let str = s.slice(1, s.length - 1);
        if (
          typeof nonce[directive] == "undefined" ||
          nonce[directive].length === 0
        ) {
          nonce[directive] =
            typeof str === "string" && str?.startsWith("nonce-")
              ? str.split("-")[1]
              : "";
        }
      });
    });

  return {
    nonce,
    csp: res?.getHeaders()["content-security-policy"],
  };
};

export default MyApp;
