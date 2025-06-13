import { useState, useEffect } from "react";
import React from "react";
import { useRouter } from "next/router";
import ReCAPTCHA from "react-google-recaptcha";
import Img from "../components/image";
import ImgW from "../components/image";
import Link from "next/link";

export default function Contacts({ data }) {
  const router = useRouter();
  const recaptchaRef = React.useRef(null);

  const [name, setName] = useState("");
  const [apellido, setApellido] = useState("");
  const [telefono, setTelefono] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState(router.query.m ?? "");
  const [responseMessage, setResponseMessage] = useState("");
  const [submitted, setSubmitted] = useState("false");
  const [sendingLabel, setSendingLabel] = useState("Enviar mensaje");


  //---combo---
  const options = [
    { value: 'Santa Cruz', text: 'Santa Cruz' },
    { value: 'La Paz', text: 'La Paz' },
    { value: 'Cochabamba', text: 'Cochabamba' },
    { value: 'Pando', text: 'Pando' },
    { value: 'Beni', text: 'Beni' },
    { value: 'Tarija', text: 'Tarija' },
    { value: 'Chuquisaca', text: 'Chuquisaca' },
    { value: 'Oruro', text: 'Oruro' },
    { value: 'Potosí', text: 'Potosí' },
  ];

  const optionsBob = [
    { value: 'De Bs 1.000 a Bs 5.000', text: 'De Bs 1.000 a Bs 5.000' },
    { value: 'De Bs 5.001 a Bs 10.000', text: 'De Bs 5.001 a Bs 10.000' },
    { value: 'De Bs 10.001 a Bs 15.000', text: 'De Bs 10.001 a Bs 15.000' },
    { value: 'De Bs 15.001 en adelante', text: 'De Bs 15.001 en adelante' },
  ];

  const optionsUsd = [
    { value: 'De USD 100 a USD 1.000', text: 'De USD 100 a USD 1.000' },
    { value: 'De USD1.001 a USD 5.000', text: 'De USD1.001 a USD 5.000' },
    { value: 'De USD 5.001 a USD 15.000', text: 'De USD 5.001 a USD 15.000' },
    { value: 'De USD 15.001 a USD 30.000', text: 'De USD 15.001 a USD 30.000' },
    { value: 'De USD 30.001 en adelante', text: 'De USD 30.001 en adelante' },
  ];


  const [selectedCiudad, setSelected] = useState(options[0].value);
  const [moneda, setMoneda] = useState();
  const [selectedBob, setSelectedBob] = useState(optionsBob[0].value);
  const [selectedUsd, setSelectedUsd] = useState(optionsUsd[0].value);


  const handleChange = event => {
    console.log(event.target.value);
    setSelected(event.target.value);

  };

  const handleChangeBob = event => {
    console.log(event.target.value);
    setSelectedBob(event.target.value);
    setSelectedUsd(null);

  };

  const handleChangeUsd = event => {
    console.log(event.target.value);
    setSelectedUsd(event.target.value);
    setSelectedBob(null);

  };



  const handleBob = (e) => {
    setMoneda(e.target.value);

    $("#divMontos").css("display", "block");
    $("#idSelectBob").css("display", "block");
    $("#idSelectUsd").css("display", "none");
  }
  const handleUsd = (e) => {
    setMoneda(e.target.value);
    $("#divMontos").css("display", "block");
    $("#idSelectBob").css("display", "none");
    $("#idSelectUsd").css("display", "block");
  }

  // --Fin combo--



  
  const validateCaptcha = (response_key) => {
    return new Promise((resolve, reject) => {
      const secret_key = process.env.RECAPTCHA_SECRET;

      const url = `https://www.google.com/recaptcha/api/siteverify?secret=${secret_key}&response=${response_key}`;

      fetch(url, {
        method: "post",
      })
        .then((response) => response.json())
        .then((google_response) => {
          if (google_response.success == true) {
            resolve(true);
          } else {
            resolve(false);
          }
        })
        .catch((err) => {
          console.log(err);
          resolve(false);
        });
    });
  };
  
  useEffect(() => {
    if (!router.isReady) return;
    router.query.m && message == "" && setMessage(router.query.m);
  }, [router, message]);

  const handleSubmit = (e) => {
    e.preventDefault();
   // Execute the reCAPTCHA when the form is submitted
    recaptchaRef.current.execute();
  };


  //  const handleSubmit = (e) => {
  //    e.preventDefault();

  const onReCAPTCHAChange = async (captchaCode) => {
  

    setResponseMessage("");

    let hasError = false;
    if (
      name.trim().length === 0 ||
      email.trim().length === 0 ||
      message.trim().length === 0
    ) {
      hasError = true;
    }

    if (!/^[a-zA-Z]+[a-zA-Z0-9_.]+@[a-zA-Z.]+[a-zA-Z]$/ig.test(email)) {
      hasError = true;
    }

    if (!hasError) {

      if (!captchaCode) {
        return;
      }
    
      if (!validateCaptcha(captchaCode) === true) {
      
        setResponseMessage(
          "Ooops! Hubo una falla Captcha"
        );
        return;
      }

      setResponseMessage(
        "Enviando, por favor espere mientras procesamos su solicitud"
      );
      setSendingLabel("Enviando...");

      let body = {
        name,
        apellido,
        telefono,
        selectedCiudad,
        selectedBob,
        selectedUsd,
        email,
        message,
      };

      fetch("/api/contact", {
        method: "POST",
        headers: {
          Accept: "application/json, text/plain, */*",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      })
        .then((res) => {
          return res.json();
        })
        .then((res) => {
          console.log("Response received", res);
          if (res?.payload?.accepted) {
            console.log("Sent Email Succeess!");
            setSubmitted("true");
            setName("");
            setApellido("");
            setTelefono("");
            setSelected(optionsBob[0].value);
            setEmail("");
            setMessage("");
            setResponseMessage(
              "Su mensaje se ha enviado satisfactoriamente."
            );
            setSendingLabel("Enviar mensaje");
          } else {
            setSubmitted("false");
            setResponseMessage(
              "Ooops! Hubo una falla al enviar su mensaje, por favor intente de nuevo"
            );
            setSendingLabel("Enviar mensaje");
          }
        });
    } else {
      setResponseMessage(
        "Ooops! Debes rellenar todos los campos con los datos correctos"
      );
    }
  };

  return (
    <>
      <div className="contact-area area-padding pt130" id="contacto">
        <div className="container">
          <div className="row">
            <div className="col-md-8 col-md-offset-2 col-sm-12 col-xs-12">
              <div className="col-md-12 col-xs-12">
                <div className="contact-form">
                  <div className="row">
                    <form
                      id="contactForm"
                      method="POST"
                      className="contact-form"
                    >
                      <div className="section-headline2 text-center">
                        <h3 className="text-light-green"> ¡Invierte ahora!</h3>
                        <p>Déjanos tus datos y nos contactaremos contigo para brindarte mayor información</p>
                        <br></br>
                      </div>
                      <div className="col-md-6 col-sm-6 col-xs-12">
                        <input
                          type="text"
                          name="name"
                          id="name"
                          className="form-control"
                          placeholder="Nombre"
                          required
                          data-error="Ingresa tu nombre"
                          onChange={(e) => {
                            setName(e.target.value);
                          }}
                          value={name}
                        />
                        <div className="help-block with-errors"></div>
                      </div>

                      <div className="col-md-6 col-sm-6 col-xs-12">
                        <input
                          type="text"
                          name="apellido"
                          className="apellido form-control"
                          id="apellido"
                          placeholder="Apellido"
                          required
                          data-error="Ingresa tu Apellido"
                          onChange={(e) => {
                            setApellido(e.target.value);
                          }}
                          value={apellido}
                        />
                        <div className="help-block with-errors"></div>
                      </div>

                      <div className="col-md-6 col-sm-6 col-xs-12">
                        <input
                          type="text"
                          name="telefono"
                          className="telefono form-control"
                          id="telefono"
                          placeholder="Teléfono"
                          required
                          data-error="Ingresa tu Teléfono"
                          onChange={(e) => {
                            setTelefono(e.target.value);
                          }}
                          value={telefono}
                        />
                        <div className="help-block with-errors"></div>
                      </div>

                      <div className="col-md-6 col-sm-6 col-xs-12">
                        <input
                          type="email"
                          name="email"
                          className="email form-control"
                          id="email"
                          placeholder="Email"
                          required
                          data-error="Ingresa tu email"
                          onChange={(e) => {
                            setEmail(e.target.value);
                          }}
                          value={email}
                        />
                        <div className="help-block with-errors"></div>
                      </div>

                      <div className="col-md-12 col-sm-12 col-xs-12">
                        <select id="selectedCiudad" type="select" className="ciudad form-control" value={selectedCiudad} onChange={handleChange}>
                          {options.map(option => (
                            <option key={option.value} value={option.value}>
                              {option.text}
                            </option>
                          ))}
                        </select>

                        <div className="help-block with-errors"></div>
                      </div>

                      <div className="col-md-12 col-sm-12 col-xs-12">
                        <div className="justify-content-center">

                          <input
                            type="radio"
                            name="topping"
                            value="BOB"
                            id="regular"
                            checked={moneda === "BOB"}
                            onChange={handleBob}
                          />
                          <p htmlFor="regular">Bolivianos</p>



                          <input
                            type="radio"
                            name="topping"
                            value="USD"
                            id="medium"
                            checked={moneda === "USD"}
                            onChange={handleUsd}
                          />
                          <p htmlFor="medium">Dolares</p>

                        </div>

                      </div>

                      <div id="divMontos" className="col-md-12 col-sm-12 col-xs-12 justify-content-center-hidden">

                        <select id="idSelectBob" className="Monto form-control" value={selectedBob} onChange={handleChangeBob}>
                          {optionsBob.map(option => (
                            <option key={option.value} value={option.value}>
                              {option.text}
                            </option>
                          ))}
                        </select>

                        <select id="idSelectUsd" className="Monto form-control" value={selectedUsd} onChange={handleChangeUsd}>
                          {optionsUsd.map(option => (
                            <option key={option.value} value={option.value}>
                              {option.text}
                            </option>
                          ))}
                        </select>

                        <div className="help-block with-errors"></div>
                      </div>

                      <div className="col-md-12 col-sm-12 col-xs-12">
                        <textarea
                          id="message"
                          name="message"
                          rows="7"
                          placeholder="Mensaje"
                          className="form-control"
                          required
                          data-error="Escribe aquí tu mensaje"
                          onChange={(e) => {
                            setMessage(e.target.value);
                          }}
                          value={message}
                        ></textarea>
                        <div className="help-block with-errors"></div>
                      </div>
                      <div className="col-md-12 col-sm-12 col-xs-12 text-center">
                        <div id="msgSubmit" className="h3 text-center">
                          {responseMessage}
                        </div>
                        <div className="clearfix"></div>

                        
                        {/* <ReCAPTCHA size="normal" sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY} /> */}

                        <ReCAPTCHA
                      ref={recaptchaRef}
                      size="invisible"
                      sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
                      onChange={onReCAPTCHAChange}
                      
                    />

                        <div className="clearfix"></div>
                        <button
                          onClick={(e) => {
                            handleSubmit(e);
                          }}
                          type="submit"
                          id="submit"
                          submitted={submitted}
                          className="add-btn contact-btn"
                        >
                          {sendingLabel}
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <div className="row">



            <div className="col-md-12 col-sm-12 col-xs-12">
              <div className="section-headline2 text-center">
                <h3 className="text-light-green">Contáctanos</h3>
                <p className="text-center">¿No sabes como invertir?, contáctate con un asesor a través de las sucursales del Banco Ganadero como canal de distribución de los fondos.
                </p>
                <strong className="text-light-green-w">    Atención de Lunes a Viernes de 08:00 a 16:00 hrs</strong>
              </div>
            </div>

            <div className="col-md-12 col-sm-12 col-xs-12">
              <br></br>
              <br></br>
              <div className="contact-inner">
                <div className="col-md-4 col-sm-4 col-xs-12">
                  <div className="contact-icon text-center">
                    <div>
                      <Img s="celular.png" a="Ganasafi" w="60px" />
                      <br />
                    </div>

                    <br />
                    <p>
                      <strong>Santa Cruz </strong> (591) 317-0400
                      <br />
                      Internos: 3095 – 0468 – 0467
                    </p>

                      
                    <p>
                      
                      <strong>Santa Cruz - Beni - Pando :</strong>
                      <br />
                    </p>
                    <div>
                    <p>

                        <a href="https://wa.me/59177798260" target="_blank" rel="noreferrer">
                          <ImgW s="wcontacto.png" a="Ganasafi" w="20px" />

                        </a>
                        77798260
                        </p>
                    </div>


                    <p>
                      {/* <strong>Cochabamba:</strong> (591) 4-4173000
                        <br />
                        Interno: 3437 - 3430
                        <br /> */}
                      <strong>La Paz - Oruro - Potosí :</strong>
                      <br />
                    </p>
                    <div >
                      <p>

                        <a href="https://wa.me/59177798263" target="_blank" rel="noreferrer">
                          <ImgW s="wcontacto.png" a="Ganasafi" w="20px" />

                        </a>
                        77798263
                      </p>
                    </div>

                    <p>
                      <strong>Cochabamba - Tarija - Sucre :</strong>
                      <br />
                    </p>
                    <div >
                      <p>

                        <a href="https://wa.me/77798262" target="_blank" rel="noreferrer">
                          <ImgW s="wcontacto.png" a="Ganasafi" w="20px" />

                        </a>
                        77798262
                      </p>
                    </div>





                  </div>
                </div>
                <div className="col-md-4 col-sm-4 col-xs-12">
                  <div className="contact-icon text-center">
                    <div className="single-icon">
                      <Img s="mail.png" a="Ganasafi" w="80px" />
                      <br />
                    </div>
                    <br></br>
                    <br></br>
                    <p>
                      <strong>Email:</strong>
                      <br></br>
                      informaciones@ganasafi.com.bo
                    </p>
                    <p>

                    </p>

                    <div >
                      <p>

                        <a href="https://wa.me/59177798260" target="_blank" rel="noreferrer">
                          <ImgW s="wcontacto.png" a="Ganasafi" w="20px" />

                        </a>
                        77798260
                      </p>

                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-sm-4 col-xs-12">
                  <div className="contact-icon text-center">
                    <div className="single-icon">
                  <a href="https://www.bg.com.bo/sucursales/" target="_blank" rel="noreferrer">
                        <Img s="ubicacion.png" a="Ganasafi" w="80px" />
                  </a>

                      <br /><br />
                      {/* <p>
                        <strong>Cochabamba: </strong>
                        
                        Sucursal Cochabamba Av. Ayacucho Nº 174 – Edificio María Antonieta - PB
                      </p> */}

                      <p>
                        Atención en toda la red de oficinas del Banco Ganadero S.A. a nivel nacional.
                      </p>
                      <br>                   
                      </br>
                      {/* <a href="https://www.bg.com.bo/sucursales/" target="_blank" rel="noreferrer">
                     
                      Presiona aquí para ver las oficinas
                                        
                    </a>  */}

                      <p>
                        <strong>Oficina administrativa GanaSafi: </strong>
                        calle Murillo N° 89 esq. Bolívar-Santa Cuz.
                      </p>

                      <Link href="https://www.bg.com.bo/sucursales/" target="_blank" rel="noreferrer">
                      <a target="_blank" className="ab-btn left-ab-btn btn-service">
                      Más oficinas
                      </a>
                    </Link>  
                      {/* <p>
                        Atención de Lunes a Viernes de 08:00 a 16:00 hrs
                      </p> */}
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
