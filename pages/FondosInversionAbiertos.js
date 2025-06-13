import Container from "../components/layout/container";
import Link from "next/link";
import Img from "../components/image";
import Image from "next/image";

export default function EducacionFinanciera() {
  return (
    <Container>

<div
        className={
          `about-area bg-color fix area-padding slide-area slide-area-2 fix` + ( "")
        }
      >
  <div className="container">


<div className="row">
  <div className="support-all">
    <div className="col-md-6 col-sm-6 col-xs-12">
      
    
            


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
      
     

    </div>

    <div className="col-md-6 col-sm-6 col-xs-12">
    
              
  
  
        
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

  

 

   


  
  </div>
</div>
</div>

</div>
    
    </Container>
  );
}
