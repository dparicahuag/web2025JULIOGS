/* eslint-disable @next/next/no-html-link-for-pages */
import { useEffect, useState, useCallback } from "react";
import MediaQuery from "react-responsive";
import Link from "next/link";
import Img from "../image";
import Script from 'next/script'

const Logo = () => {
  return <Img s="logo/logoheader.png" />;
};

const Menu = (props) => {
  const { c } = props;

  return (
    <ul className={c ?? ""}>
      <li>
        <Link href="/quienes-somos">
          <a className="pages">¿Quiénes somos?</a>
        </Link>

      </li>

      <li>
        <Link href="/productos">
          <a className="pages">Fondos de inversión</a>
        </Link>
        <ul className="sub-menu">
          <li>
            <Link href="/FondosInversionAbiertos">
              <a>Fondos de inversión abiertos</a>
            </Link>
          </li>
          <li>
            <Link href="/cobertura/gana-cobertura">
              <a>Fondos de inversión cerrado</a>
            </Link>
          </li>

          {/* <li>
            <Link href="/productos/gana-inversiones">
              <a>Comparador de fondos</a>
            </Link>
          </li> */}

          <li>
            <Link href="/#comparador">
              <a
                onClick={(e) => {
                  window &&
                    document.querySelector("#comparador") &&
                    window.scrollTo({
                      top: document.querySelector("#comparador")?.offsetTop,
                      behavior: "smooth",
                    });
                }}
              >
                Comparador de fondos
              </a>
            </Link>
          </li>

        </ul>
      </li>
      <li>
        <Link href="/EducacionFinanciera">
          <a className="pages">Educación Financiera</a>
        </Link>
      </li>
      <li>
        <Link href="/productos">
          <a>Simulador</a>
        </Link>

        <ul className="sub-menu">
          <li>
            <Link href="/productos/gana-rendimiento">
              <a>GanaRendimiento</a>
            </Link>
          </li>
          <li>
            <Link href="/productos/gana-inversiones">
              <a>GanaInversiones</a>
            </Link>
          </li>
        </ul>
      </li>
      <li>
        <Link href="/productos">
          <a className="pages">Asistencia</a>
        </Link>
        <ul className="sub-menu">
          <li>
            <Link href="/#contacto">
              {/* <a className="pages">Contáctenos</a> */}

              <a
                onClick={(e) => {
                  window &&
                    document.querySelector("#contacto") &&
                    window.scrollTo({
                      top: document.querySelector("#contacto")?.offsetTop,
                      behavior: "smooth",
                    });
                }}
              >
                Contáctenos
              </a>

            </Link>
          </li>
          <li>
            <Link href="/faq">
              <a className="pages">Preguntas frecuentes</a>
            </Link>
          </li>

          <li>
            <Link href="/Consejo-Seguridad">
              <a className="pages">Consejo de seguridad</a>
            </Link>
          </li>
        </ul>
      </li>



      {/* 
      <li>
        <Link href="/#comparador">
          <a
            onClick={(e) => {
              window &&
                document.querySelector("#comparador") &&
                window.scrollTo({
                  top: document.querySelector("#comparador")?.offsetTop,
                  behavior: "smooth",
                });
            }}
          >
            Comparador de Fondos
          </a>
        </Link>
      </li>
      <li>
        <Link href="/contacto">
          <a className="pages">Contáctanos</a>
        </Link>
      </li>
      <li>
        <Link href="/faq">
          <a>Preguntas Frecuentes</a>
        </Link>
      </li>

      <li>
        <Link href="/Consejo-Seguridad">
          <a className="pages">Consejos de Seguridad</a>
        </Link>
      </li>

      <MediaQuery query={`(max-width: 1023px)`}>
        <li>
          <Link href="/GanaSafi">
            <a className="s-menu">Ingresar</a>
          </Link>
        </li>
      </MediaQuery> */}
    </ul>
  );
};

let mmLoaded = false;
let __onResize = false;
export default function Header({ data }) {
  const breakpoint = 1024;

  const applyMM = useCallback(() => {
    if (
      window?.innerWidth < breakpoint &&
      !!window.jQuery?.fn?.meanmenu &&
      !mmLoaded &&
      window.jQuery("nav#dropdown").length > 0
    ) {
      window.jQuery("nav#dropdown").meanmenu();
      window.mmSetupFront = true;
      mmLoaded = true;
    }

    if (
      window?.innerWidth < breakpoint &&
      !!window["jQuery"] &&
      window.jQuery(".mobile-menu-area").length > 0
    ) {
      window.jQuery("nav#dropdown").hide();
    }
  }, []);

  useEffect(() => {
    applyMM();

    if (typeof window !== "undefined" && !__onResize) {
      window.onresize = applyMM;
      __onResize = true;
    }
  }, [applyMM]);

  return (
    <>
      <header className="header-one">
        <MediaQuery query={`(min-width: ${breakpoint}px)`}>
          <div id="sticker" className="header-area hidden-xs">
            <div className="container-fluid">
              <div className="row">
                <div className="col-md-12 col-sm-12">
                  <div className="row">
                    <div className="col-lg-3 col-md-2 col-sm-2">
                      <div className="logo">
                        <a
                          href="/"
                          className="navbar-brand page-scroll white-logo"
                        >
                          <Logo />
                        </a>

                        <a
                          href="/"
                          className="navbar-brand page-scroll black-logo"
                        >
                          <Logo />
                        </a>
                      </div>
                    </div>
                    <div className="col-lg-9 col-md-10 col-sm-10">
                      <div className="header-right-link">
                        {/* <Link href="http://10.77.88.32:8080/DazModLogon-DazModLogonViewController-context-root/faces/Gen/Logon/Pages/DazModLogonPrincipal.jsf">
                          <a className="s-menu">Ingresar</a>
                        </Link> */}
                      </div>

                      <nav className="navbar navbar-default">
                        <div
                          className="collapse navbar-collapse"
                          id="navbar-example"
                        >
                          <div className="main-menu">
                            <Menu c="nav navbar-nav navbar-right" />
                          </div>
                        </div>
                      </nav>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </MediaQuery>

        <MediaQuery query={`(max-width: ${breakpoint * 1 - 1}px)`}>
          <div className="mobile-menu-area hidden-lg ">
            <div className="container-fluid ">
              <div className="row">
                <div className="col-md-12">
                  <div className="mobile-menu">
                    <div className="logo">
                      <a href="/">
                        <Img s="logo/logoheader.png" w="250px" />
                      </a>
                    </div>
                    <nav id="dropdown">
                      <Menu />
                    </nav>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </MediaQuery>
      </header>
    </>
  );
}
