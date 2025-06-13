import Head from "next/head";
import React from "react";
import { StoreContext } from "../../../context/store";
import Script from 'next/script';

export default function HTMLHead(props) {
  const store = React.useContext(StoreContext);

  store.set("nonce", props.nonce);
  store.set("csp", props.csp);

  const cssFiles = [
    "/assets/static/css/bootstrap.min.css",
    "/assets/static/css/animate.css",
    "/assets/static/css/owl.carousel.css",
    "/assets/static/css/owl.transitions.css",
    "/assets/static/css/meanmenu.min.css",
    "/assets/static/css/nice-select.css",
    "/assets/static/css/font-awesome.min.css",
    "/assets/static/css/themify-icons.css",
    "/assets/static/css/flaticon.css",
    "/assets/static/css/magnific.min.css",
    "/assets/static/css/animate.css",
    "/assets/static/css/globals.css",

  ];

  return (
     <Head nonce={props.nonce["default-src"]}>
      <title>
        Ganasafi - Ganadero Asociación Administradora de Fondos de Inversión
        S.A.
      </title>
      <meta name="description" content="" />
      {/*  <meta name="csp-nonce" content={props.nonce["style-src"]} />
      <meta name="content-security-policy" content={props.csp} />  */}
      {/* <meta name="content-security-policy" content="default-src https://www.googletagmanager.com https://www.google-analytics.com; child-src 'none'; object-src 'none'"/>       */}
     {/*  <meta name="content-security-policy" content="default-src https://www.googletagmanager.com https://www.google-analytics.com https://www.facebook.com https://connect.facebook.net; connect-src 'self'; font-src 'self'; frame-src 'self';img-src 'self';manifest-src 'self';media-src 'self';object-src 'self';script-src-elem 'self' https://www.googletagmanager.com https://www.google-analytics.com https://www.facebook.com https://connect.facebook.net;style-src-elem 'self';style-src-attr 'self';worker-src 'self'"/>      
      <meta name="facebook-domain-verification" content="mvzzt44wxryvlohqlmra07kjajuypp" />
     <meta name="content-security-policy" content="default-src 'none'; script-src  https://www.googletagmanager.com https://www.google-analytics.com ; style-src https://www.googletagmanager.com https://www.google-analytics.com  'unsafe-inline' 'unsafe-eval';script-src-elem 'self' https://www.googletagmanager.com https://www.google-analytics.com 'unsafe-inline' 'unsafe-eval' ;" />   */}
     

      <link rel="shortcut icon" type="image/png" href="img/logo/favicon.png" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />

      <link
        href="/assets/static/css/bootstrap.min.css"
        rel="preload"
        as="style"
        nonce={props.nonce["style-src"]}
      />

      <link
        href="/assets/static/css/globals.css"
        rel="preload"
        as="style"
        nonce={props.nonce["style-src"]}
      />
      
      {cssFiles.map((href) => {
        return (
          <link
            key={href}
            href={href}
            rel="stylesheet"
            type="text/css"
            nonce={props.nonce["style-src"]}
          />
        );
      }) ?? ""}
    </Head>
  );
}
