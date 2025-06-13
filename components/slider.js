import  {useEffect, useState } from "react";
import Script from "next/script";
import Link from "next/link";
import { doUntil } from "../utils/helpers";
import Img from "../components/imageupload";
import Image from "next/image";

export default function Slider({ sliders }) {
  const [owlLoaded, setLoaded] = useState(false);

  useEffect(() => {
    //call owlCarousel plugin only if it's loaded
    if (typeof window !== "undefined") {
      doUntil(()=>{
        if (!!window["jQuery"]) {
          const owlCalled = jQuery(".owl-carousel");
          if (jQuery.fn?.owlCarousel && owlCalled.length === 0) {
            setLoaded(true);
          }
        }
      }, owlLoaded);
    } else {
      setLoaded(false);
    }
  }, [setLoaded, owlLoaded]);

  return (
    <>
      {/* Start Slider content */}
      
          {sliders.map((item,k) => {
            return item?.image?.length > 0 ? (
              <style key={item.image+k} nonce={global?.nonce["style-src"]}>{`
                  .slide-${item?.uuid} {
                    background:rgba(0, 0, 0, 0) no-repeat scroll top center/cover url("/uploads/${item.image}") !important;
                  }
                `}</style>
            ) : (
              ""
            );
          })}
{sliders.length > 0 && (
        <div className="slider-main">
          {sliders.map((item) => {
            return  <Image key={item?.uuid}  src={`/uploads/${item.image}`} alt="GanaSAfi" width={1920}  height={750} layout="responsive" />
             //return <Slide key={item?.uuid} data={item} />;
          })}
        </div>
      )}


      {sliders.length > 1 && owlLoaded && (
        <Script
          dangerouslySetInnerHTML={{
            __html: `if ($('.slider-main').length) $('.slider-main').owlCarousel( {
            loop: true,
            nav: true,
            margin: 0,
            dots: true,
            autoplay: true,
            navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
            responsive: {
              0: {
                items: 1,
                dots: true
              },
              768: {
                dots: true,
                items: 1
              },
              1000: {
                dots: true,
                items: 1
              }
            }
          } );`,
          }}
          strategy="lazyOnload"
          nonce={global.nonce["script-src"]}
        />
      )}
      {/* End Slider content */}
    </>
  );
}

export function Slide(props) {
 
  return (
    <>
      <div
        className={`slide-area home fix slide-${props?.data?.uuid}`}
        data-stellar-background-ratio=".4"
      >
        <div className="display-table">
          <div className="display-table-cell">
            <div className="container">
              <div className="row">
                <div className="col-md-12 col-sm-12 col-xs-12">
                  <div className="slide-content">
                    <h2 className="title2">
                      {props?.data?.title.length > 0
                        ? props?.data?.title
                        : `Invierte en Fondos de Inversión`}
                    </h2>
                    <p>
                      {props?.data?.description ??
                        `Los Fondos de Inversión Abiertos se convierten en una
                      alternativa a través la diversificación de la conformación
                      de los portafolios de inversión.`}
                    </p>
                    <div className="layer-1-3">
                      {/* <Link
                        href={
                          props?.data?.link_button1.length > 0
                            ? props?.data?.link_button1
                            : `#`
                        }
                      >
                        <a className="ready-btn left-btn">
                          {props?.data?.text_button1.length > 0
                            ? props?.data?.text_button1
                            : `Simula tu inversión`}
                        </a>
                      </Link>*/}
                      {/* <div className="video-content">
                        <Link
                          href={
                            props?.data?.link_button2.length > 0
                              ? props?.data?.link_button2
                              : `#`
                          }
                        >
                          <a className="video-play vid-zone">
                            <i className="fa fa-dollar"></i>
                            <span>
                              {props?.data?.text_button2.length > 0
                                ? props?.data?.text_button2
                                : `Haz tu consulta`}
                            </span>
                          </a>
                        </Link>
                      </div>  */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}