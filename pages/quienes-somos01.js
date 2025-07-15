import Container from "../components/layout/container";
import Img from "../components/image";
import Link from "next/link";
import Image from "next/image";


export default function QuienesSomos() {
  return (
    <Container>
      <style nonce={`${global?.nonce["style-src"]}`}>
        {`
        .quienesSomos {
          padding-top:50px
        }
        `}
      </style>      
      <div
        className="quienesSomos area-padding-3"
        nonce={global.nonce["style-src"]}
      >
<Img s="quienessomos.jpg" a="Ganasafi" w="100%" />
        <div className="container">
        
          <div className="row">
            <div className="pricing-content">
              <div className="col-md-8 col-md-offset-2 col-sm-6  col-xs-12">
                <div className="text-left">
                  <h1 className="text-light-green hide">¿Quiénes somos?</h1>

                  <br />
                  <br />

                  <p>
                    <strong className="text-light-green-w">
                      Ganadero Sociedad Administradora de Fondos de Inversión
                      S.A. GanaSafi S.A.
                    </strong>
                    <br />
                    <br />
                    Es miembro del grupo Financiero Ganadero, nace el año 2020,
                    con la misión de Administrar Fondos de Inversión que
                    coadyuven activamente en el desarrollo económico, financiero
                    y social del país, fomentando el ahorro interno nacional,
                    facilitando económicamente la creación, expansión y
                    desarrollo de empresas nacionales, incentivando las
                    inversiones nacionales y/o extranjeras en el país y
                    cubriendo los requerimientos financieros de los diferentes
                    rubros económicos del país, preservando el patrimonio de los
                    clientes inversionistas, participantes de los Fondos de
                    Inversión administrados.
                  </p>
                  <hr />

                  <Img
                    s="organigramaempresarial.png"
                    a="Ganasafi - Organigrama"
                  />
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
      <div className="pricing-area area-padding-2" id="comparador">
        <div className="container">
          <div className="row">
            <div className="col-md-12 col-sm-12 col-xs-12">
              <div className="section-headline text-center">
                <h3 className="text-white">Estados Financieros</h3>                         
              </div>

              <div className="area-padding">
                  <div className="col-md-3 col-sm-6 col-xs-12">
                    <div className="support-services_2 wow " >
                      <h4 className="text-green ta-center" >
                        Anual 2022
                      </h4>
                      <a className="support-images" href="#">
                        <Img s="EstadosFinacieros.png" a="Gana Rendimiento" w="400px" />
                      </a>
                      <Link href="/productos/gana-inversiones">
                        <a className="ab-btn left-ab-btn_2 btn-service" rel="noreferrer" target="_blank" href="\docs\EEFF GANASAFI 2022.pdf">
                          Descargar pdf
                        </a>
                      </Link>
                    </div>
                  </div>

                  <div className="col-md-3 col-sm-6 col-xs-12">
                    <div className="support-services_2 wow " >
                      <h4 className="text-green ta-center" >
                        Semestral 2023
                      </h4>
                      <a className="support-images" href="#">
                        <Img s="EstadosFinacieros2023.png" a="Gana Rendimiento" w="400px" />
                      </a>
                      <Link href="/productos/gana-inversiones">
                        <a className="ab-btn left-ab-btn_2 btn-service" rel="noreferrer" target="_blank" href="\docs\EEFF_GANASAFI-JUNIO_2023.pdf">
                          Descargar pdf
                        </a>
                      </Link>
                    </div>
                  </div>

                  <div className="col-md-3 col-sm-6 col-xs-12">
                    <div className="support-services_2 wow " >
                      <h4 className="text-green ta-center" >
                      Anual 2023
                      </h4>
                      <a className="support-images2" href="#">
                        <Img s="EEFF_GanaSafi.png" a="Gana Rendimiento" w="400px" />
                      </a>
                      <Link href="/productos/gana-inversiones">
                        <a className="ab-btn left-ab-btn_2 btn-service" rel="noreferrer" target="_blank" href="\docs\EEFF_GANASAF_2023.pdf">
                          Descargar pdf
                        </a>
                      </Link>
                    </div>
                  </div>
                   
                  <div className="col-md-3 col-sm-6 col-xs-12">
                    <div className="support-services_2 wow " >
                      <h4 className="text-green ta-center" >
                      Semestral 2024
                      </h4>
                      <a className="support-images2" href="#">
                        <Img s="EEFF_ganaSafi2024.png" a="Gana Rendimiento" w="400px" />
                      </a>
                      <Link href="/productos/gana-inversiones">
                        <a className="ab-btn left-ab-btn_2 btn-service" rel="noreferrer" target="_blank" href="\docs\EEFF_GANASAFI_JUNIO_2024.pdf">
                          Descargar pdf
                        </a>
                      </Link>
                    </div>
                  </div>

                  <div className="col-md-3 col-sm-6 col-xs-12">
                    <div className="support-services_2 wow " >
                      <h4 className="text-green ta-center" >
                      Anual 2024
                      </h4>
                      <a className="support-images2" href="#">
                        <Img s="EEFF_GanaSafiAnual2024.png" a="Gana Rendimiento" w="400px" />
                      </a>
                      <Link href="/productos/gana-inversiones">
                        <a className="ab-btn left-ab-btn_2 btn-service" rel="noreferrer" target="_blank" href="\docs\EEFF_GANASAFI_ANUAL_2024.pdf">
                          Descargar pdf
                        </a>
                      </Link>
                    </div>
                  </div>



                </div>
            </div>
          </div>

        </div>
      </div>
      <div
        className={
          `about-area bg-color fix area-padding slide-area slide-area-3 fix`
        }
      >
        <div className="container">
          <div className="row">
            <div className="">
              <div className="section-headline text-center">
                <h3 className="text-white">Memoria Anual</h3>

                <div className="area-padding">
                  <div className="col-md-3 col-sm-6 col-xs-12">
                    <div className="support-services_2 wow " >
                      <h4 className="text-green ta-center" >
                        2022
                      </h4>
                      <a className="support-images" href="#">
                        <Img s="Memoria2022.png" a="Gana Rendimiento" w="400px" />
                      </a>
                      <Link href="/productos/gana-inversiones">
                        <a className="ab-btn left-ab-btn_2 btn-service" rel="noreferrer" target="_blank" href="\docs\Memoria_GanaSafi_Completa_2022.pdf">
                          Descargar pdf
                        </a>
                      </Link>
                    </div>
                  </div>
                  <div className="col-md-3 col-sm-6 col-xs-12">
                    <div className="support-services_2 wow " >
                      <h4 className="text-green ta-center" >
                        2023
                      </h4>
                      <a className="support-images" href="#">
                        <Img s="Memoria2023.png" a="Gana Rendimiento" w="400px" />
                      </a>
                      <Link href="/productos/gana-inversiones">
                        <a className="ab-btn left-ab-btn_2 btn-service" rel="noreferrer" target="_blank" href="\docs\Memoria_GANASAFI_2023.pdf">
                          Descargar pdf
                        </a>
                      </Link>
                    </div>
                  </div>


                </div>
              </div>
            </div>
          </div>
          <div className="row">

          </div>

        </div>
      </div>

    </Container>
  );
}
