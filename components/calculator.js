import { useState } from "react";
import Link from "next/link";

const times = 12;

export default function Calculator({ data }) {
  const { currencySymbol, rate } = data;
  const lblDato = currencySymbol ?? "Cambiar a ";
  data.rate = data.rate ?? 0.095;

  const [capital, setCapital] = useState(0);
  const [result, setResult] = useState(0);

  const _calc = () => {
    let r = parseFloat(capital * Math.pow(1 + (rate / 100), 1/times)).toFixed(2);
    setResult(r);
    return r;
  };

  return (
    <>
      <div className="money-send">
        <div className="calculator-inner  text-left">
          <div className="single-cal">
            <div className="inner-form">
              <form action="#">
                <label>Valor inicial</label>
                <input
                  type="number"
                  className="form-input"
                  placeholder="Monto"
                  onChange={(e) => {
                    setCapital(e.target.value);
                  }}
                  onSubmit={(e)=>{
                      e.preventDefault();
                      e.stopPropagation();
                      _calc();
                  }}
                />
                {/*
                                <select onChange={(e) => { setCurrencySymbol(e.target.value) }} value={currencySymbol}>
                                    <option value="USD">USD</option>
                                    <option value="Bs.">BS.</option>
                                </select>
                                */}
              </form>
            </div>
            <div className="inner-formDivCal">
              <div>
            <button className="cale-btn" onClick={_calc}>
              Calcular
            </button>
            </div>
            <div>
        
          
              {/* <Link href="/productos/gana-inversiones">
                      
              <label>{lblDato}</label>
                   
                    </Link> */}

              </div>
            
            </div>
            <div className="inner-form">
              <form action="#">
             
                <h3 className="text-green">
                  {currencySymbol} {result} *
                </h3>
              </form>
            </div>
            <div className="inner-form-text">
              <div className="rate-text">
                <span>
                  {" "}
                  <strong>{parseFloat(rate).toFixed(2)}%</strong> Tasa de Rendimiento Anual Neta 
                  {/*<strong>{(rate / 100).toFixed(4)}</strong> Tasa mensual*/}
                </span>
                <br></br>
                <span>
                  {" "}
                  <strong>(*)</strong> Calculo de los últimos 30 días 
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
