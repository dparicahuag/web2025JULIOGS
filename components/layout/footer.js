import Script from "next/script";
import Link from "next/link";
import Img from "../image";
import { StoreContext } from "../../context/store";
import ToolTip from '../ui/Tooltip'
import React from "react";
import Image from "next/image";

export default function Footer() {
  const store = React.useContext( StoreContext );
  const [jQueryLoaded, setJQLoaded] = React.useState(false);

    const jsFirstFiles = ["/assets/static/js/vendor/jquery-1.12.4.min.js"];

    const jsFiles = [
      "/assets/static/js/bootstrap.min.js",
      "/assets/static/js/owl.carousel.min.js",
      "/assets/static/js/jquery.stellar.min.js",
      "/assets/static/js/jquery.counterup.min.js",
      "/assets/static/js/waypoints.js",
    ];

    const jsLazyLoadFiles = [
      "/assets/static/js/jquery.nice-select.min.js",
      "/assets/static/js/magnific.min.js",
      "/assets/static/js/wow.min.js",
      "/assets/static/js/jquery.meanmenu.js",
      "/assets/static/js/form-validator.min.js",
      "/assets/static/js/plugins.js",
      "/assets/static/js/main.js",
    ];

    React.useEffect(()=>{
      let i = setInterval(()=>{
        if (!!window && !!window.jQuery) {
          setJQLoaded(true);
        }
        if (jQueryLoaded) {
          clearInterval(i);
        }
      }, 100);
    }, [setJQLoaded, jQueryLoaded]);

  return (
    <footer className="footer-1">
      <div className="footer-area">
        <div className="container">
          <div className="row">
            {" "}
            <div className="col-md-6 col-sm-6 col-xs-12">
              <div className="footer-content logo-footer">
                <div className="footer-head">
                  <div className="footer-logo">
                    <Link href="/">
                      <a className="footer-black-logo">
                        <Img s="logo/logofooter.png" w="400px" a="" />
                      </a>
                    </Link>
                  </div>
                  <p>
                    La oficina principal de GanaSafi S.A. se encuentra ubicada
                    en la Calle Murillo Nº 89, Planta Alta, de la ciudad de
                    Santa Cruz, teléfono 591- (3) 317-0400.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-sm-6 col-xs-12">
              <div className="footer-content">
                <div className="footer-head-left">
                  <p className="text-light-green-w">Fondos de Inversión</p>
                  <ul className="footer-list">
                    <li>
                      <Link href="/productos/gana-inversiones">
                        <a>GanaInversiones</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/productos/gana-rendimiento">
                        <a>GanaRendimiento</a>
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="footer-head-left">
                  <p className="text-light-green-w">Asistencia</p>
                  <ul className="footer-list">
                    <li>
                    <Link href="/contacto">
                        <a>Contáctanos</a>
                      </Link>
                    </li>
                    <li>
                    <Link href="/faq">
                        <a>Preguntas frecuentes</a>
                      </Link>
                      <Link href="/Consejo-Seguridad">
                        <a>Consejos de seguridad</a>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>   
             <div className="whatsap">
			<ToolTip tooltipText="¿Necesitas ayuda?<br/><strong>¡Escríbenos!</strong>" orientation='left'>           
              <Image
					id='chatWhatsapp'
					className='transition duration-300 ease-in-out border-2 border-white rounded-full shadow-md hover:-translate-y-0.5 hover:scale-110 shadow-gray-500'
					src='/img/whatsapp.png'
					alt='WhatsApp GanaSafi'
					width={60}
					height={60}
					onClick={() => {
						window.open(
							'https://api.whatsapp.com/send?phone=+59177798260&text=Hola%20GanaSafi%2C%20me%20gustar%C3%ADa%20saber%20m%C3%A1s%20sobre%20sus%20productos%20y%20servicios.',
							'webchat',
							'width=800,height=600'
						)
					}}
				/>
			</ToolTip>

		</div >

          </div>

        </div>

      

  <div>

</div>      
      </div>
   
     

      <div className="footer-area-bottom">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-sm-6 col-xs-12">
              <div className="copyright">
                <p>
                  Copyright © 2024 <a href="#">GANASAFI</a> Todos los derechos
                  reservados.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {jsFirstFiles.map((src) => {
        return (
          <Script key={src} src={src} nonce={global.nonce["script-src"]} />
        );
      }) ?? ""}

      {jQueryLoaded &&
        jsFiles.map((src) => {
          return (
            <Script
              key={src}
              src={src}
              strategy="afterInteractive"
              defer
              nonce={global.nonce["script-src"]}
            />
          );
        })}

      {jQueryLoaded &&
        jsLazyLoadFiles.map((src) => {
          return (
            <Script
              key={src}
              src={src}
              strategy="lazyOnload"
              nonce={global.nonce["script-src"]}
            />
          );
        })}




    </footer>
  );
}
