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
  "gana-cobertura": {
    title: "GanaCobertura - FIA",
    bajada1: "Promover el acceso al financiamiento del sector de PYME y microempresas tanto productivo como  de comercio y servicios, mediante la cobertura de créditos otorgados por la EIF, fortaleciendo la cadena productiva, la creación de empleos y beneficiando a inversionistas y sectores implicados. Asimismo, coadyuvar con el acceso al financiamiento mediante Créditos de Consumo de la población boliviana",
    bajada2: "Promover el acceso de los inversionistas del Fondo (Participantes) a obtener rentabilidades razonables y a riesgos controlados.",
    bajada3: "Realizar inversiones en Valores de renta fija de ofera pública, para generar una cobertura financiera adecuada a GanaCobertura - FIC, de manera de generar rentabilidad con una adecuada gestión y control de riesgos.",
    image: "inversiones.png",
    image2: "Grupo2502.png",
    prospecto: "/docs/Prospecto de Emisión GanaCobertura -FIC.pdf",
    reglamento: "/docs/Reglamento Interno GanaCobertura FIC.pdf",
    texto: "Cambiar a bolivianos",
    clase: ""
  },
};

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
          <Img s="logoCobertura.png" a="Ganasafi" w="400px" />
          <br />
          <br />
          <div className="rates">
            Moneda: <span className="users">Bolivianos</span>
          </div>
        </div>
        <ol>

          <li className="check">
            <strong className="text-light-green-w">Tipo de valor:</strong>{" "}
            Cuota de participación
          </li>
          <li className="check">
            <strong className="text-light-green-w">
              Denominación de la Emisión:
            </strong>{" "}
            <br />
            Cuotas de Participación GanaCobertura - FIC
          </li>
          <li className="check">
            <strong className="text-light-green-w">Moneda de los Activos del Fondo:</strong>{" "}
            <br />
            Bolivianos y/o dólares estadounidenses
          </li>
          <li className="check">
            <strong className="text-light-green-w">Monto de la Emisión:</strong>
            <br />
            BS 100.000.000.-                                (Cien millones 00/100 bolivianos))

          </li>
          <li className="check">
            <strong className="text-light-green-w">
              Plazo de Vida del Fondo:
            </strong>{" "}
            <br />
            3600 días calendario a partir de la Fecha de Inicio de Actividades del Fondo.
          </li>
          <li className="check">
            <strong className="text-light-green-w">Series de la Emisión:</strong>{" "}
            <br />
            Seria A: Subordinada.
            <br />
            Serie B: Senior.
          </li>

          <li className="check">
            <strong className="text-light-green-w">Cantidad de Cuotas de Participación de cada Serie:</strong>{" "}
            <br />
            Seria A: 10.000 (Diez mil).
            <br />
            Serie B: 90.000 (Noventa mil).
          </li>
          <li className="check">
            <strong className="text-light-green-w">Cantidad de Valores:</strong>{" "}
            <br />
            100.000 (Cien mil)
          </li>

          <li className="check">
            <strong className="text-light-green-w">Monto de cada Serie:</strong>{" "}
            <br />
            Serie A: 10.000.000 (Diez millones 00/100 de bolivianos).
            <br />
            Serie B: 90.000.000 (Noventa millones 00/100 de bolivianos).
          </li>

          <li className="check">
            <strong className="text-light-green-w">Valor nominal de las Cuotas de Participación:</strong>{" "}

            <br />
            Bs1.000.- (Un mil 00/100 bolivianos).

          </li>


          <li className="check">
            <strong className="text-light-green-w">Calificación de Riesgo:</strong>{" "}

            <br />
            AA2, efectuada por AESA Ratings S.A.
            <br />
            Calificadora de Riesgo
            <br />
            28/06/2024
          </li>

          <li className="check">
            <strong className="text-light-green-w">Forma de Redención y pago de Rendimientos:</strong>{" "}

            <br />
            Capital: Al momento de la liquidación del Fondo de Inversión.
            <br />
            Rendimientos: De forma Anual a partir del segundo año de vida del Fondo de Inversión.
          </li>


        </ol>

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


                <div className="section-headline11">
                  <h3 className="text-light-green">
                    Objetivo del Fondo
                  </h3>
                  <div className="row">
                    {/* <div className="col-sm-2 col-xs-2">
                      <Img s={products[pid].image} a={`products[pid].title`} w="60px" />
                    </div> */}



<div className="table-listpoint">
<ol>
<li className="point">
    {products[pid].bajada1}
</li>
<li className="point">
    {products[pid].bajada2}
</li>
<li className="point">
    {products[pid].bajada3}
</li>
</ol>
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
