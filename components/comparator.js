import {useEffect, useState, useCallback} from "react";
import Link from "next/link";
import { getProperties } from "../libs/services/properties";


const objectType = "settings";
const group = "rates";

export default function Comparator(props) {
    const [rates, setRates] = useState({});

    const getRates = useCallback(async () => {
      const res = await getProperties({
        objectId:0,
        objectType,
        group,
      });
      const r = {};
      res.map(item =>{
        r[item.key] = item;
      });
      setRates(r);
    },[setRates]);

  useEffect(() => {
    getRates();
  }, [getRates]);
  
  const message = "Deseo solicitar información sobre";

  return (
    <>
      <div className="pricing-area area-padding-2" id="comparador">
        <div className="container">
          <div className="row">
            <div className="col-md-12 col-sm-12 col-xs-12">
              <div className="section-headline text-center">
                <h3 className="text-white">Comparador de Fondos</h3>
                {/* <p className="text-green">
                  Elige el fondo correcto que se adapte a tu perfil y
                  necesidades
                </p> */}
              </div>
            </div>
          </div>
          <div className="row">
            <div className="pricing-content">
              <div className="col-md-6 col-sm-6  col-xs-12">
                <div className="table-list">
                  <div className="top-price-inner">
                    <div className="price-title">
                      <h4 className="text-green">GanaInversiones - FIA</h4>
                    </div>
                    <div className="rates">
                      Moneda: <span className="users">Dólares</span>
                    </div>
                  </div>
                  <ol>
                    <li className="">
                      <strong>
                        Inversiones a Corto Plazo concentradas en USD, perfil
                        conservador
                      </strong>
                    </li>
                    <li className="check">
                      <strong className="text-light-green-w">
                        Calificación de Riesgo
                      </strong>{" "}
                      AA2 - 28/06/2024
                    </li>
                    <li className="check">
                      <strong className="text-light-green-w">
                        Monto mínimo de Inversión
                      </strong>{" "}
                      $us. 100
                    </li>
                    <li className="check">
                      <strong className="text-light-green-w">
                        Cantidad de Rescates permitidos:
                      </strong>{" "}
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
            USD 500.001  en adelante 4 días hábiles de notificación
            
          </li>

                    <li className="check">
                      <strong className="text-light-green-w">
                      Permanencia mínima de la Inversión en cuotas:
                      </strong>{" "}
                      24Hrs
                    </li>
                    <li className="check">
                      <strong className="text-light-green-w">
                        Perfil Inversor:
                      </strong>{" "}
                      Inversionistas conservadores que desean un rendimiento
                      atractivo en USD, y alta disponibilidad de sus recursos
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
                            `Tasas de interés al 31/12/22`}
                        </td>
                        <td>{rates["inversionesRate30"]?.value ?? `1.01`}</td>
                        <td>{rates["inversionesRate60"]?.value ?? `1.31`}</td>
                        <td>{rates["inversionesRate90"]?.value ?? `1.52`}</td>
                        <td>{rates["inversionesRate180"]?.value ?? `-`}</td>
                      </tr>
                    </tbody>
                  </table>

                  <div>
                    <Link
                      href={{
                        pathname: "contacto/[message]",
                        query: {
                          message,
                        },
                      }}
                      as={`contacto?m=${encodeURIComponent(
                        message + " GanaInversiones"
                      )}`}
                    >
                        <a className="ab-btn left-ab-btn btn-service">Solicitar</a>
                    </Link>
                  </div>
                  <div className="price-btn">
                  <Link href="/productos/gana-inversiones">
                    <a >
                      Quiero saber más
                    </a>
                  </Link>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-sm-6 col-xs-12">
                <div className="table-list">
                  <div className="top-price-inner">
                    <div className="price-title dark">
                      <h4 className="">GanaRendimiento - FIA</h4>
                    </div>
                    <div className="rates">
                      Moneda: <span className="users">Bolivianos</span>
                    </div>
                  </div>
                  <ol>
                    <li className="">
                      <strong>
                        Inversiones a Corto Plazo concentradas en Bs, perfil
                        conservador
                      </strong>
                    </li>
                    <li className="check">
                      <strong className="text-light-green-w">
                      Calificación de Riesgo
                      </strong>{" "}
                      AA3 - 28/06/2024
                    </li>
                    <li className="check">
                      <strong className="text-light-green-w">
                        Monto mínimo de Inversión:
                      </strong>{" "}
                      Bs. 1000
                    </li>
                    <li className="check">
                      <strong className="text-light-green-w">
                        Cantidad de Rescates Permitidos:
                      </strong>{" "}
                      <br />
                      Sin Restricciones.
                      
                     
                    </li>
                    <li className="check">
                      <strong className="text-light-green-w">
                        Política de rescate(Retiros):
                      </strong>{" "}
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
                      <strong className="text-light-green-w">
                        Perfil Inversor:
                      </strong>{" "}
                      Inversionistas conservadores que desean un rendimiento
                      atractivo en Bs, y alta disponibilidad de sus recursos
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
                      <br />
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
                        pathname: "contacto/[message]",
                        query: {
                          message,
                        },
                      }}
                      as={`contacto?m=${encodeURIComponent(
                        message + " GanaRendimiento"
                      )}`}
                    >
                      <a className="ab-btn left-ab-btn btn-service" >Solicitar</a>
                    </Link>
                  </div>

                  <div className="price-btn">
                  <Link href="/productos/gana-rendimiento">
                    <a >
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
    </>
  );
}
