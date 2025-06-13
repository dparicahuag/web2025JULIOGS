import { useState, useEffect } from "react";
import { useRouter } from "next/router";
//import ReCAPTCHA from "react-google-recaptcha";
import Img from "../components/image";

export default function Fondo({ props }) {
  const router = useRouter();


  return (
    <>

    <div className=" ">
      <div className="container">
        <h6 className="text-center">      
        <br/>
        <br/>  
           <p>Empieza a invertir hoy mismo en los Fondos de Inversión administrados por GanaSafi desde la comodidad de tu hogar.</p>
        </h6>
      </div>

  
        <br/>
        <div className="container">
            <div className="row">
                <div className="all-services ">
                    
                <div className="col-md-12 col-sm-12 col-xs-12">
                  <div className="contact-inner">
                <div className="col-md-4 col-sm-4 col-xs-12" >
                  <div className="contact-icon text-center">
                    <div >
                      <Img s="paso11.png" a="Ganasafi" w="80px" />
                      {/* <p>
                      <strong>¿Quiénes somos?</strong> 
                      </p>
                      */}
                       <br/> 
                      <br/> 
                      <p className='text-justify'>
                      Ganadero Sociedad Administradora de Fondos de Inversión S.A. GanaSafi S.A., miembros del grupo Financiero Ganadero, nace el año 2020 
                      con la misión de brindar alternativas 
                      de inversión en el Mercado de Valores y constituirse en el corto plazo en una empresa líder en la administración 
                      y distribución de Fondos de Inversión.
                      </p>
                      <br/>
                    </div>

          

                  </div>
                </div>
                <div className="col-md-4 col-sm-4 col-xs-12" >
                  <div className="contact-icon text-center">
                  <div >
                      <Img s="paso22.png" a="Ganasafi" w="80px" />
                      {/* <p>
                      <strong>¿Qué es un Fondo de Inversión?</strong> 
                      </p>
                       */}
                        <br/> 
                       <br/>
                      <p className='text-justify'>
                      Es una alternativa de inversión que consiste en reunir los recursos de distintas personas para invertirlos en diferentes instrumentos 
                      financieros (por ejemplo: bonos, acciones, pagares, letras del tesoro y otros que son negociados en la Bolsa de Valores), 
                      con la única finalidad de obtener una rentabilidad que se distribuye entre todos los participantes y en función de sus aportes individuales.
                      </p>
                      <br/>
                    </div>
                 
          

                  </div>
                </div>
                <div className="col-md-4 col-sm-4 col-xs-12" >
                  <div className="contact-icon text-center">
                  <div >
                      <Img s="paso33.png" a="Ganasafi" w="80px" />
                      {/* <p>
                      <strong>¿Cómo invertir en un Fondo de Inversión?</strong> 
                      </p>
                    */}
                      <br/> 
                      <br/> 
                      <p className='text-justify'>
                      A través de la compra de Cuotas de Participación del Fondo de Inversión con el que te registras como “participante” de acuerdo a tu perfil de inversión,
                       en los puntos de atención establecidos por las Sociedades Administradoras de Fondos de Inversión.
                      </p>
                      <br/>
                 
                    </div>

                 

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
