import Link from "next/link";
import Img from "../components/image";

export default function OurProducts({ data }) {
  const { standalone } = data;
  return (
    <>
      <div
        className={
          `about-area bg-color fix area-padding slide-area slide-area-2 fix` + (standalone ? " pt130" : "")
        }
      >
        <div className="container">
          <div className="row">
            <div className="">
              <div className="section-headline text-center">
                <h3 className="text-white">Fondos de Inversión</h3>
                <p className="text-white">
                  Tu confianza, nuestro compromiso.<br/>Invierte en el fondo que más se adapte a tu perfil, objetivos y necesidades.
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="support-all">
              <div className="col-md-6 col-sm-6 col-xs-12">                
              <h4 className="text-light-green-center">
                        <strong>Fondos abiertos</strong>
                      </h4>                                
                <div className="support-services wow ">
                  <a className="support-images" href="#">
                  
                    <strong>Bs.</strong>
                  </a>
                  <div className="support-content">
                    <Link href="/productos/gana-rendimiento">
                      <a>
                        {/* <h4 className="text-light-green-w">
                        <strong>GanaRendimiento - FIA</strong>
                      </h4> */}
               <Img s="logorendimiento.png" a="Gana Rendimiento" w="270px" /> 
                      </a>
                      </Link>
                    <p>
                    La opción acertada de Invertir en Bs y contar con liquidez inmediata.
                    </p>
                    <Link href="/productos/gana-rendimiento">
                      <a className="ab-btn left-ab-btn btn-service">
                        Quiero saber más
                      </a>
                    </Link>                    
                  </div>
                </div>                
                <div className="support-services wow ">
                  <a className="support-images" href="#">
                    {/* <Img s="inversiones.png" a="Gana Inversiones" w="60px" /> */}
                    
                    <strong>$us.</strong>
                  </a>
                  <div className="support-content">
                    <Link href="/productos/gana-rendimiento">
                      <a>
                        {/* <h4 className="text-light-green-w">
                          <strong>GanaInversiones - FIA</strong>
                        </h4> */}
                      <Img s="logoinversiones.png" a="Gana Rendimiento" w="270px" /> 

                      </a>
                    </Link>
                    <p>
                     La alternativa perfecta para invertir en USD y tener disponibilidad de tus recursos.
                    </p>
                    <Link href="/productos/gana-inversiones">
                      <a className="ab-btn left-ab-btn btn-service">
                        Quiero saber más
                      </a>
                    </Link>                   
                  </div>
                </div>
              </div>            
              <div className="col-md-6 col-sm-6 col-xs-12">
         
              <h4 className="text-light-green-center ">
                        <strong>Fondos cerrados</strong>
                      </h4>

              <div className="support-services wow ">
                  <a className="support-images" href="#">
                    {/* <Img s="rendimiento.png" a="Gana Rendimiento" w="60px" /> */}
                    <strong>Bs.</strong>
                  </a>
                  <div className="support-content">
                    <Link href="/productos/gana-rendimiento">
                      <a>
                        {/* <h4 className="text-light-green-center ">
                        <strong>GanaCobertura</strong> */}
                      {/* </h4> */}
                      
                      <Img s="logoCobertura.png" a="Gana Rendimiento" w="270px" />
                      
                      </a>
                      </Link>
                    {/* <p>
                    La alternativa perfecta para invertir en USD y tener disponibilidad de us recursos.
                    </p> */}
                    <div className="support-vacio" ></div>

                    <Link href="/cobertura/gana-cobertura">
                      <a className="ab-btn left-ab-btn btn-service">
                        Quiero saber más
                      </a>
                    </Link>                    
                  </div>
                </div>
              </div>             
              <div className="v-line">
</div>            
            </div>
          </div>
          
        </div>
      </div>
    </>
  );
}
