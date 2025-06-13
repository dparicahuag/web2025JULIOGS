import React, { useState, useEffect, memo } from "react";
import { useRouter } from "next/router";
import {
  encrypt,
  decrypt,
  getCookie,
  removeCookie,
  setCookie,
  log,
} from "../../../utils/common";
import { Container, Row, Col } from "reactstrap";
import { StoreContext } from "../../../context/store";
import Head from "next/head";

/* Components */
import SideBar from "./sidebar";
import NavBar from "./navbar";

const storeLayout = {};

function AdminContainer(mainProps) {
  const router = useRouter();
  const { children } = mainProps;
  const [session, setSession] = useState();

  const store = React.useContext(StoreContext);

  const signOut = () => {
    //return;
    setSession({});
    removeCookie("uuid");
    removeCookie("accessToken");
    log(getCookie("accessToken"));
    window.location.href = "/login";
  };

  useEffect(() => {
    fetch("/api/auth/session")
      .then((resp) => {
        return resp.json();
      })
      .then((data) => {
        log({ data });
        if (!data?.user?.id) {
          //TODO:logout and clean user data and cookies
          //redirect to homepage
          signOut();
          return;
        } else {
          setSession(data);
        }
      });
  }, [setSession]);

  if (!getCookie("accessToken") || !getCookie("uuid")) {
    signOut();
  }

  const cssFiles = [
    "/assets/static/css/animate.css",
    "/assets/static/css/themify-icons.css",
    "/assets/static/css/font-awesome.min.css",
    "/assets/static/css/flaticon.css",
    "/assets/static/css/admin.css",
  ];
  
  return (
    <>
      <Head>
        <title>Admin | Ganasafi</title>

        <link rel="icon" href="/favicon.ico" />

        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {cssFiles.map((href) => {
          return (
            <link
              key={href}
              href={href}
              rel="stylesheet"
              type="text/css"
              nonce={global?.nonce["style-src"]}
            />
          );
        }) ?? ""}
      </Head>
      <NavBar
        session={session}
        signOut={() => {
          signOut();
        }}
      />
      <Container fluid className="wrapper">
        <Row>
          <Col className="wrapper-left">
            <SideBar session={session} />
          </Col>
          <Col className="wrapper-content">{children}</Col>
        </Row>
      </Container>
    </>
  );
}

export default AdminContainer;
