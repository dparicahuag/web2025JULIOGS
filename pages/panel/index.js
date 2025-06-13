import {useState, useEffect} from "react";
import AdminContainer from "./layout/container";
import InputProperty from "../../components/layout/fields/inputProperty";
import { ucfirst, isset, empty, getVar } from "../../utils/helpers";

const OBJECT_TYPE = "settings";
const GROUP = "rates";

export default function Dashboard(props) {
    const [inversionesRateLastUpdate, setInversionesRateLastUpdate] = useState(getVar(props, "inversionesRateLastUpdate", "")??"");
    const [inversionesRate30, setInversionesRate30] = useState(getVar(props, "inversionesRate30", "")??"");
    const [inversionesRate60, setInversionesRate60] = useState(getVar(props, "inversionesRate60", "")??"");
    const [inversionesRate90, setInversionesRate90] = useState(getVar(props, "inversionesRate90", "")??"");
    const [inversionesRate180, setInversionesRate180] = useState(getVar(props, "inversionesRate180", "")??"");

    const [rendimientoRateLastUpdate, setRendimientoRateLastUpdate] = useState(getVar(props, "rendimientoRateLastUpdate", "")??"");
    const [rendimientoRate30, setRendimientoRate30] = useState(getVar(props, "rendimientoRate30", "")??"");
    const [rendimientoRate60, setRendimientoRate60] = useState(getVar(props, "rendimientoRate60", "")??"");
    const [rendimientoRate90, setRendimientoRate90] = useState(getVar(props, "rendimientoRate90", "")??"");
    const [rendimientoRate180, setRendimientoRate180] = useState(getVar(props, "rendimientoRate180", "")??"");
    
    const handler = (value, key) => {
        if (
            isset(props[`set${ucfirst(key)}`]) &&
            typeof props[`set${ucfirst(key)}`] === "function"
        ) {
            const fnName = `set${ucfirst(key)}`;
            console.log([fnName]);
            [fnName](value);
        } else {
            //TODO: thrown error
        }
    };

    const inputsInv = [
      {
        title: "Fecha de Actualización",
        name: "inversionesRateLastUpdate",
      },
      {
        title: "Tasa a 30 Días %",
        name: "inversionesRate30",
      },
      {
        title: "Tasa a 90 Días %",
        name: "inversionesRate60",
      },
      {
        title: "Tasa a 180 Días %",
        name: "inversionesRate90",
      },
      {
        title: "Tasa a 360 Días %",
        name: "inversionesRate180",
      },
    ];
    
    const inputsRend = [
      {
        title: "Fecha de Actualización",
        name: "rendimientoRateLastUpdate",
      },
      {
        title: "Tasa a 30 Días %",
        name: "rendimientoRate30",
      },
      {
        title: "Tasa a 90 Días %",
        name: "rendimientoRate60",
      },
      {
        title: "Tasa a 180 Días %",
        name: "rendimientoRate90",
      },
      {
        title: "Tasa a 360 Días %",
        name: "rendimientoRate180",
      },
    ];

    return (
      <AdminContainer>
        <h1>Dashboard</h1>

        <p>
          Bienvenido al administrador de contenidos de GanaSafi. Por favor
          seleccione una opción del menu.
        </p>

        <h2>Tasas de GanaInversiones - FIA</h2>
        {Object.values(inputsInv).map((item,k) => {
          return (
              <InputProperty
                handler={handler}
                objectId={0}
                objectType={OBJECT_TYPE}
                dataType="string"
                group={GROUP}
                __key={item.name}
                key={item.name+k}
                value={[item.name]}
                form="rates"
                label={item.title}
                fieldName={`${item.name}`}
              />
          );
        })}

        <h2>Tasas de GanaRendimiento - FIA</h2>
        {Object.values(inputsRend).map((item,k) => {
          return (
              <InputProperty
                handler={handler}
                objectId={0}
                objectType={OBJECT_TYPE}
                dataType="string"
                group={GROUP}
                key={item.name + k}
                __key={item.name}
                value={[item.name]}
                form="rates"
                label={item.title}
                fieldName={`${item.name}`}
              />
          );
        })}
      </AdminContainer>
    );
}