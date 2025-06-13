import Container from "../components/layout/container";
import Link from "next/link";
import Img from "../components/image";

export default function EducacionFinanciera() {
  return (
    <Container>
      <div className="faq-area area-padding-2 pt130">
        <div className="container">
          <div className="row">
            <div className="col-md-12 col-sm-12 col-xs-12">
              <div className="section-headline text-center">
                <h3 className="text-light-green-w">Educación financiera</h3>

                      <p className="text-p">
                      Queremos brindarte información, para que puedas comprender como funciona un fondo de inversión, 
                      </p>
            
                  
                      <p className="text-p">              
                   una Sociedad Administradora de Fondos de Inversión y algunos aspectos relevantes   
                </p>
           

                <p className="text-p">
                
                
               
                sobre el mercado de valores en Bolivia</p>
              </div>
            </div>
          </div>
  
        </div>


        <div className="pricing-area-slide2 row">
        <div className="container" >  
            <div className="area-padding">
              <div className="col-md-2 col-sm-6 col-xs-12">
                <div className="support-services_2 wow ">
                  <a className="support-images" href="#">
                     <Img s="GS001.png" a="Gana Rendimiento" w="200px" /> 
                 
                  </a>
                  <Link href="/productos/gana-inversiones">
                  <a className="ab-btn left-ab-btn_2 btn-service" rel="noreferrer" target="_blank" href="https://www.facebook.com/bg.com.bo/videos/418464490276738">
                        ver
                      </a>
                    </Link>
                
                </div>
              </div>
              <div className="col-md-2 col-sm-6 col-xs-12">
                <div className="support-services_2 wow ">
                  <a className="support-images" href="#">
                  <Img s="GS002.png" a="Gana Rendimiento" w="200px" /> 
                  </a>
                  <Link href="/productos/gana-inversiones">
                  <a className="ab-btn left-ab-btn_2 btn-service" rel="noreferrer" target="_blank" href="https://www.facebook.com/bg.com.bo/videos/2998359907137739">
                        ver
                      </a>
                    </Link>
               
                </div>
              </div>
              <div className="col-md-2 col-sm-6 col-xs-12">
                <div className="support-services_2 wow ">
                  <a className="support-images" href="#">
                  <Img s="GS003.png" a="Gana Rendimiento" w="200px" /> 
                   {/* <Img s="Reglamento_GanaRendimiento_2022.pdf" a="Gana Rendimiento" w="400px" />   */}
                   {/* <Image   src='/docs/Reglamento_GanaRendimiento_2022.pdf' alt="GanaSAfi" width={1920}  height={750} layout="responsive" />  */}

                    {/* <object  data="/docs/Reglamento_GanaRendimiento_2022.pdf" type="image/jpeg" width="100%" height="100%">                 
                       </object>
                   */}

                  
                  {/* <iframe className="support-iframe"  src='/docs/Reglamento_GanaRendimiento_2022.pdf' height="100%" width="100%"   />  */}

                  {/* <iframe className="support-iframe"  src='/docs/Reglamento_GanaRendimiento_2022.pdf'   marginwidth="0px" frameborder="0"  height="100%" width="100%" allowfullscreen></iframe>
                 
                   */}
{/* <iframe
          id="ytplayer"
          type="text/html"
          width="100%"
          height="360"
          src={`https://www.youtube.com/watch?v=q998zh0l7gc`}
          frameborder="0"
        ></iframe> */}
                   
                  </a>
                  <Link href="/productos/gana-inversiones">
                      <a className="ab-btn left-ab-btn_2 btn-service" rel="noreferrer" target="_blank" href="https://www.facebook.com/bg.com.bo/videos/618838226950185">
                        ver
                      </a>
                    </Link>
               
                </div>
              </div>
            </div>
            </div>
          </div>

         


       
      </div>


    
    </Container>
  );
}
