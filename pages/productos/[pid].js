import { useState, useCallback, useEffect } from "react";
import { useRouter } from "next/router";
import Container from "../../components/layout/container";
import Calculator from "../../components/calculator";
import Link from "next/link";
import Img from "../../components/image";
import { getProperties } from "../../libs/services/properties";

const message = "Deseo solicitar información sobre GanaRendimiento";

const objectType = "settings";
const group = "rates";

const products = {
  "gana-rendimiento": {
    title: "GanaRendimiento - FIA",
    bajada: "La opción acertada de Invertir en Bs y contar con liquidez inmediata",
    image:"rendimiento.png",
    image2:"GanaRendimientoIMG.png",
    prospecto: "/docs/PROSPECTO_GANARENDIMIENTO_2022.pdf",
    reglamento: "/docs/Reglamento_GanaRendimiento_2022.pdf", 
    texto:"Cambiar a Dólares",
    clase : "",
  },
  "gana-inversiones": {
    title: "GanaInversiones - FIA",
    bajada: "La alternativa perfecta para invertir en USD y tener disponibilidad de tus recursos.",
    image:"inversiones.png",
    image2:"GanaInversionesIMG.png",
    prospecto: "/docs/PROSPECTO_GanaInversiones_FIA_Definitivo_17092021.pdf",
    reglamento: "/docs/Reglamento_GanaInversiones_23_08_2021_VF.pdf", 
    texto:"Cambiar a bolivianos",
    clase : ""
  },
  "gana-cobertura": {
    title: "GanaCobertura - FIA",
    bajada: "La alternativa perfecta para invertir en USD y tener disponibilidad de tus recursos.",
    image:"inversiones.png",
    image2:"GanaInversionesIMG.png",
    prospecto: "/docs/PROSPECTO_GanaInversiones_FIA_Definitivo_17092021.pdf",
    reglamento: "/docs/Reglamento_GanaInversiones_23_08_2021_VF.pdf", 
    texto:"Cambiar a bolivianos",
    clase : ""
  },
};

const ContentGanaInversiones = () => {
  
    const [rates, setRates] = useState({});

    const getRates = useCallback(async () => {
      const res = await getProperties({
        objectId: 0,
        objectType,
        group,
      });
      console.log(res);
      const r = {};
      res.map((item) => {
        r[item.key] = item;
      });
      setRates(r);
    }, [setRates]);

    useEffect(() => {
      getRates();
    }, [getRates]);
  
  return (
    <div className="col-md-6 col-sm-6  col-xs-12">
      <div className="table-list">
        <div className="top-price-inner">
          <Img s="logoinversiones.png" a="Ganasafi" w="500px" />
          <br />
          <br />
          <div className="rates">
            Moneda: <span className="users">Dólares</span>
          </div>
        </div>
        <ol>
          <li className="">
            <strong>
              Inversiones a Corto Plazo concentradas en USD, perfil conservador
            </strong>
          </li>
          <li className="check">
            <strong className="text-light-green-w">Calificación de Riesgo</strong>{" "}
            AA1 - 27/09/2024
          </li>
          <li className="check">
            <strong className="text-light-green-w">
              Monto mínimo de inversión:
            </strong>{" "}
            USD 100
          </li>
          <li className="check">
            <strong className="text-light-green-w">Rescates permitidos:</strong>{" "}
            <br />
            Sin Restricciones. 
          </li>
          <li className="check">
            <strong className="text-light-green-w">Política de rescate:</strong>{" "}
            <br />
            USD 100.000                                en el día
            
            <br />
            USD 100.001 a 500.000         3 días hábiles de notificación
            
            <br />
            USD 500.001     en adelante 4 días de notificación
            
          </li>
          <li className="check">
            <strong className="text-light-green-w">
              Permanencia mínima de la inversión en cuotas: 
            </strong>{" "}
            24Hrs
          </li>
          <li className="check">
            <strong className="text-light-green-w">Perfil Inversor:</strong>{" "}
            Inversionistas conservadores que desean un rendimiento atractivo en USD,
            y alta disponibilidad de sus recursos
          </li>
          <li className="check">
                      <strong className="text-light-green-w">Beneficios:</strong>{" "}
                      <br />
                      • Cuenta exenta de ITF en todas las Compras de Cuotas (depósitos)
                      <br />
                      • Retiro en Efectivo en toda la red de Oficinas del Banco Ganadero
                      <br />
                      • Emisión de Cheques sin costo
                      <br />
                      • Transferencias ACH (envío y recepción)
                      <br />
                      • Transferencias al Exterior (envío y recepción)
                      <br />
                      • Comisiones preferenciales 
                      <br />
                      • Tarjeta de Débito (para Personas)
                      <br />
                      • Atención por canales digitales
                      <br />
                      • Equipo profesional calificado
                      <br />
                    </li>
        </ol>

        <table border="1" className="table-rendimientos">
          <tbody>
            <tr>
              <th>GanaInversiones FIA</th>
              <th>A 30 días</th>
              <th>A 90 días</th>
              <th>A 180 días</th>
              <th>A 360 días</th>
            </tr>
            <tr>
              <td>
                {rates["inversionesRateLastUpdate"]?.value ??
                  `Tasas de interés al 31/03/22`}
              </td>
              <td>{rates["inversionesRate30"]?.value ?? `1.01`}</td>
              <td>{rates["inversionesRate60"]?.value ?? `1.31`}</td>
              <td>{rates["inversionesRate90"]?.value ?? `1.52`}</td>
              <td>{rates["inversionesRate180"]?.value ?? `-`}</td>
            </tr>
          </tbody>
        </table>

        <div >
          <Link
            href={{
              pathname: "/contacto",
              query: {
                message,
              },
            }}
            as={`/contacto?m=${encodeURIComponent(message)}`}
          >
             <a className="ab-btn left-ab-btn btn-service">
              Solicitar</a>
          </Link>
        </div>
      </div>
    </div>
  );
}

const ContentGanaRendimiento = () => {
  
    const [rates, setRates] = useState({});

    const getRates = useCallback(async () => {
      const res = await getProperties({
        objectId: 0,
        objectType,
        group,
      });
      console.log(res);
      const r = {};
      res.map((item) => {
        r[item.key] = item;
      });
      setRates(r);
    }, [setRates]);

    useEffect(() => {
      getRates();
    }, [getRates]);
  
  return (
    <div className="col-md-6 col-sm-6 col-xs-12">
      <div className="table-list">
        <div className="top-price-inner">
          <Img s="logorendimiento.png" a="Ganasafi" w="500px" />
          <br />
          <br />
          <div className="rates">
            Moneda: <span className="users">Bolivianos</span>
          </div>
        </div>
        <ol>
          <li className="">
            <p>
              Inversiones a Corto Plazo concentradas en Bs, perfil conservador
            </p>
          </li>
          <li className="check">
            <strong className="text-light-green-w">Calificación de Riesgo </strong>{" "}
            AA3 - 27/09/2024
          </li>
          <li className="check">
            <strong className="text-light-green-w">
              Monto mínimo de inversión:
            </strong>{" "}
            Bs. 1000
          </li>
          <li className="check">
            <strong className="text-light-green-w">Cantidad de Rescates permitidos:</strong>{" "}
            <br />
            Sin Restricciones. 
          </li>
          <li className="check">
            <strong className="text-light-green-w">Política de rescate:</strong>
            <br />
                      BS 700.000                                en el día
                      <br />
                      BS 700.001 a 3.500.000         3 días hábiles de notificación
                      <br />
                      BS 3.500.001 en adelante     4 días hábiles de notificación 
          </li>
          <li className="check">
            <strong className="text-light-green-w">
              Permanencia mínima de la Inversión en cuotas:
            </strong>{" "}
            24Hrs
          </li>
          <li className="check">
            <strong className="text-light-green-w">Perfil Inversor:</strong>{" "}
            Inversionistas conservadores que desean un rendimiento atractivo en Bs, y
            alta disponibilidad de sus recursos
          </li>
          <li className="check">
                      <strong className="text-light-green-w">Beneficios:</strong>{" "}
                      <br />
                      • Retiro en Efectivo en toda la red de Oficinas del Banco Ganadero
                      <br />
                      • Emisión de Cheques sin Costo
                      <br />
                      • Transferencias ACH (envío y recepción)
                      <br />
                      • Comisiones preferenciales 
                      <br />
                      • Tarjeta de Débito (para Personas)
                      <br />
                      • Atención por canales digitales
                      <br />
                      • Equipo profesional calificado
                      <br />
                    </li>
        </ol>

        <table border="1" className="table-rendimientos">
          <tbody>
            <tr>
              <th>GanaRendimiento FIA</th>
              <th>A 30 días</th>
              <th>A 90 días</th>
              <th>A 180 días</th>
              <th>A 360 días</th>
            </tr>
            <tr>
              <td>
                {rates["rendimientoRateLastUpdate"]?.value ??
                  `Tasas de interés al 23/5/22`}
              </td>
              <td>{rates["rendimientoRate30"]?.value ?? `2.94%`}</td>
              <td>{rates["rendimientoRate60"]?.value ?? `2.84%`}</td>
              <td>{rates["rendimientoRate90"]?.value ?? `-`}</td>
              <td>{rates["rendimientoRate180"]?.value ?? `-`}</td>
            </tr>
          </tbody>
        </table>

        <div >
          <Link
            href={{
              pathname: "/contacto",
              query: {
                message,
              },
            }}
            as={`/contacto?m=${encodeURIComponent(message)}`}
          >
             <a className="ab-btn left-ab-btn btn-service">
              Solicitar</a>
          </Link>
        </div>
      </div>
    </div>
  );
        }

        const ContentGanaCobertura = () => {
  
          const [rates, setRates] = useState({});
      
          const getRates = useCallback(async () => {
            const res = await getProperties({
              objectId: 0,
              objectType,
              group,
            });
            console.log(res);
            const r = {};
            res.map((item) => {
              r[item.key] = item;
            });
            setRates(r);
          }, [setRates]);
      
          useEffect(() => {
            getRates();
          }, [getRates]);
        
        return (
          <div className="col-md-6 col-sm-6 col-xs-12">
            <div className="table-list">
              <div className="top-price-inner">
                <Img s="logoCobertura.png" a="Ganasafi" w="500px" />
                <br />
                <br />
                <div className="rates">
                  Moneda: <span className="users">Bolivianos</span>
                </div>
              </div>
              <ol>
                <li className="">
                  <p>
                    Inversiones a Corto Plazo concentradas en Bs, perfil conservador
                  </p>
                </li>
                <li className="check">
                  <strong className="text-light-green-w">Calificación de Riesgo</strong>{" "}
                  AA3  - 28/06/2024
                </li>
                <li className="check">
                  <strong className="text-light-green-w">
                    Monto mínimo de inversión:
                  </strong>{" "}
                  Bs. 1000
                </li>
                <li className="check">
                  <strong className="text-light-green-w">Cantidad de Rescates permitidos:</strong>{" "}
                  <br />
                  Sin Restricciones. 
                </li>
                <li className="check">
                  <strong className="text-light-green-w">Política de rescate:</strong>
                  <br />
                            BS 700.000                                en el día
                            <br />
                            BS 700.001 a 3.500.000         3 días hábiles de notificación
                            <br />
                            BS 3.500.001 en adelante     4 días hábiles de notificación 
                </li>
                <li className="check">
                  <strong className="text-light-green-w">
                    Permanencia mínima de la Inversión en cuotas:
                  </strong>{" "}
                  24Hrs
                </li>
                <li className="check">
                  <strong className="text-light-green-w">Perfil Inversor:</strong>{" "}
                  Inversionistas conservadores que desean un rendimiento atractivo en Bs, y
                  alta disponibilidad de sus recursos
                </li>
                <li className="check">
                            <strong className="text-light-green-w">Beneficios:</strong>{" "}
                            <br />
                            • Retiro en Efectivo en toda la red de Oficinas del Banco Ganadero
                            <br />
                            • Emisión de Cheques sin Costo
                            <br />
                            • Transferencias ACH (envío y recepción)
                            <br />
                            • Comisiones preferenciales 
                            <br />
                            • Tarjeta de Débito (para Personas)
                            <br />
                            • Atención por canales digitales
                            <br />
                            • Equipo profesional calificado
                            <br />
                          </li>
              </ol>
      
              <table border="1" className="table-rendimientos">
                <tbody>
                  <tr>
                    <th>GanaRendimiento FIA</th>
                    <th>A 30 días</th>
                    <th>A 90 días</th>
                    <th>A 180 días</th>
                    <th>A 360 días</th>
                  </tr>
                  <tr>
                    <td>
                      {rates["rendimientoRateLastUpdate"]?.value ??
                        `Tasas de interés al 23/5/22`}
                    </td>
                    <td>{rates["rendimientoRate30"]?.value ?? `2.94%`}</td>
                    <td>{rates["rendimientoRate60"]?.value ?? `2.84%`}</td>
                    <td>{rates["rendimientoRate90"]?.value ?? `-`}</td>
                    <td>{rates["rendimientoRate180"]?.value ?? `-`}</td>
                  </tr>
                </tbody>
              </table>
      
              <div >
                <Link
                  href={{
                    pathname: "/contacto",
                    query: {
                      message,
                    },
                  }}
                  as={`/contacto?m=${encodeURIComponent(message)}`}
                >
                   <a className="ab-btn left-ab-btn btn-service">
                    Solicitar</a>
                </Link>
              </div>
            </div>
          </div>
        );
              }

export default function Producto({ data }) {
  const router = useRouter();
  const { pid } = router.query;

  return (
    <Container>
      <div className="pricing-area  gray area-padding-3">
        <div className="container">
          <div className="row">
            <div className="pricing-content">
              <div className="col-md-6 col-sm-6  col-xs-12">

                   
  
                <div className="banner-content">
                  <Calculator data={data} />
                </div>



                <div className="section-headline1">
                  <h3 className="text-light-green">
                    Comienza a invertir tu dinero con GanaSafi
                  </h3>
                  <div className="row">
                    {/* <div className="col-sm-2 col-xs-2">
                      <Img s={products[pid].image} a={`products[pid].title`} w="60px" />
                    </div> */}
                    <div className="col-sm-10 col-xs-10">
                      <p>

                   {products[pid].bajada}
                   
                  
                    

                  </p>
                    </div>
                  </div>                  
                  <hr />
               

             
                  <div className="row">
                    <div className="col-sm-5 col-xs-2" >
                   
                          <div className={products[pid].clase} >
                              <p>
                                <strong>Reglamento interno</strong>
                              </p>

                              
                                <a rel="noreferrer" target="_blank" href={products[pid].reglamento} className="text-light-green-w">
                                  <u>Descargar Reglamento</u>
                                </a>
                        

                              <hr />
                        </div>
                        <div className={products[pid].clase} >
                          <p>
                            <strong>Prospecto</strong>
                          </p>
                        
                            <a rel="noreferrer" target="_blank" href={products[pid].prospecto} className="text-light-green-w">
                              <u>Descargar Prospecto</u>
                            </a>
                          </div>
                        



                    </div>

          
                    <div className="col-sm-2 col-xs-2">
                    
                    </div>
                    <div className="col-sm-2 col-xs-2">
                  
                  
                    {/* <Img s="GanaRendimientoIMG.png" a="Ganasafi"  w="250px"/> */}
                    </div>
                    <div className="col-sm-2 col-xs-2">
                    
                    </div>
                    <div className="col-sm-2 col-xs-2">
                    
                    </div>

                    <div className="col-sm-10 col-xs-10">
                    <Img s={products[pid].image2} a={`products[pid].title`} w="300px" />
                    </div>

                
                  </div> 

                  
                                 
                </div>
           
              </div>

              {pid == "gana-rendimiento" && <ContentGanaRendimiento />}
              {pid == "gana-inversiones" && <ContentGanaInversiones />}
              {pid == "gana-cobertura" && <ContentGanaCobertura />}
            </div>
          </div>
        </div>
      </div>
 
    </Container>
  );
}

export async function getServerSideProps({ params }) {
  const { pid } = params;
  let data = {};
  const PORT = process.env.PORT ?? 3000;
  const baseurl = process.env.BASE_URL + ":" + PORT;
  let r = await fetch(baseurl + '/api/products/?where={"slug":"' + pid + '"}');

  if (r.status < 300) {
    let d = await r.json();
    data = d.length > 0 ? d[0] : {};
  }

  //simulating product not found after db request
  if (typeof products[pid] == "undefined") {
    return {
      notFound: true,
    };
  }

  data = { ...data, ...products[pid] };

  return {
    props: {
      data,
    },
  };
}
