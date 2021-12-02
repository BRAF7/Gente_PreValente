import mongoose from "mongoose";
import React from "react";
//Components
import Navbar from "../components/Navbar/Navbar";
// Conexion DB
import conectardb from "../lib/mongodb";
// Models
import Corporation from "../models/corporations";
// Styles
import styles from "../styles/solicitud_pendiente.module.css";
import style_dialog from "../styles/dialog_archive.module.css";
//shared
// import get_information from "../shared/JS/information";

const handleClick_right = (e) => {
  var aux = [];
  aux.push(corpo[0]);

  get_information_right(aux);
};

const handleClick_left = (e) => {
  var aux = [];
  aux.push(corpo[0]);

  get_information_left(aux);
};
var corpo = [];
export default function solicitud_pendiente(corp) {
  corpo.push(corp);
  var corporations = corp.corporations[0];
  console.log(corporations);
  return (
    <div className={styles.div_principal}>
      <Navbar></Navbar>
      <div className={styles.container_subtitle}>
        <h2 className={styles.subtitle}>Administración</h2>
        <h2 className={styles.subtitle_posActual}> / Aprobación de Empresas</h2>
      </div>
      <p className={styles.label_movil} id="Numero de empresa">
        Empresa 1 de 2 pendientes para aprobacion
      </p>
      <div className={styles.card_ok}>
        <button className={styles.ok_arrow}>
          <p className={styles.acept_empresa}>Aceptar empresa</p>
          <i className="fas fa-check-circle"></i>
        </button>
      </div>
      <div className={styles.card_no_ok}>
        <button className={styles.no_ok_arrow}>
          <p className={styles.no_acept_empresa}>Rechazar empresa</p>
          <i className="fas fa-times"></i>
        </button>
      </div>
      <button className={styles.arrow_left} onClick={handleClick_left}>
        <i className="fas fa-chevron-left"></i>
      </button>
      <button className={styles.arrow_right} onClick={handleClick_right}>
        <i className="fas fa-chevron-right"></i>
      </button>
      <div className={styles.grid}>
        <a className={styles.card}>
          <div className={styles.card_empresa}>
            <div className={styles.logo_empresa}>
              <i className="fas fa-building"></i>
            </div>
          </div>
          <div className={styles.information}>
            <h2 className={styles.letras}>Empresa</h2>
            {/* Back information */}
            <h2 className={styles.letra_nombre} id="nombre_empresa">
              {corporations.name}
            </h2>
            <div className={styles.separador_empresa}></div>
            <div className={styles.identificacion}>Tipo de identificacion</div>
            {/* Back information */}
            <h2 className={styles.letra_NIT} id="NIT">
              {corporations.NIT}
            </h2>
            <div className={styles.separador_identificacion}></div>

            <div className={styles.num_empleados}> # de empleados</div>
            {/* Back information */}
            <h2 className={styles.letra_employe} id="number_employee">
              {corporations.numero_empleados}
            </h2>
            <div className={styles.separador_empleados}></div>
            <div className={styles.razon_social}>Razon social</div>
            {/* Back information */}
            <h2 className={styles.letra_social} id="razon_social">
              {corporations.razon_social}
            </h2>
            <div className={styles.separador_social}></div>

            <div className={styles.identificacion_empresa}>Identificacion</div>
            {/* Back information */}
            <h2 className={styles.letra_identification} id="identification">
              {corporations.identificacion}
            </h2>
            <div className={styles.separador_identificacion_empresa}></div>

            <div className={styles.card_archivos}>
              <bottom className={styles.logo_archivos}>
                <i className="fas fa-paperclip"></i>
              </bottom>
              <a className={styles.archivos_letra} href="#openModal">
                Archivos adjuntos
              </a>
            </div>

            <div id="openModal" className={style_dialog.modalDialog}>
              <div>
                <a href="#close" title="Close" className={style_dialog.close}>
                  X
                </a>
                <h2 className={style_dialog.doc_charge_modal}>
                  Documentos cargados
                </h2>
                <div className={style_dialog.archives_modal}>
                  <a
                    href="download/acme-doc-2.0.1.pdf"
                    download="RUT PrevlalentWare.pdf"
                  >
                    RUT PrevlalentWare
                    <button className={style_dialog.icons_modal}>
                      <i className="fas fa-file-pdf"></i>
                    </button>
                  </a>
                  <a
                    href="download/acme-doc-2.0.1.pdf"
                    download="Logo PrevlalentWare.pdf"
                  >
                    Logo PrevlalentWare
                    <button className={style_dialog.icons_modal}>
                      <i className="fas fa-file-pdf"></i>
                    </button>
                  </a>
                  <a
                    href="download/acme-doc-2.0.1.pdf"
                    download="Acta de constitucion PrevlalentWare.pdf"
                  >
                    Acta de constitucion PrevlalentWare
                    <button className={style_dialog.icons_modal}>
                      <i className="fas fa-file-pdf"></i>
                    </button>
                  </a>
                  <a
                    href="download/acme-doc-2.0.1.pdf"
                    download="Camara de comercio PrevlalentWare.pdf"
                  >
                    Camara de comercio PrevlalentWare
                    <button className={style_dialog.icons_modal}>
                      <i className="fas fa-file-pdf"></i>
                    </button>
                  </a>
                  <a
                    href="download/acme-doc-2.0.1.pdf"
                    download="Otro documento PrevlalentWare.pdf"
                  >
                    Otro documento PrevlalentWare
                    <button className={style_dialog.icons_modal}>
                      <i className="fas fa-file-pdf"></i>
                    </button>
                  </a>
                </div>
              </div>
            </div>
            {/* Heres start doc for movile */}
            <p className={styles.archive_movil}>Documentos cargados</p>
            <div>
              <div className={style_dialog.archives_modal_movil}>
                <a
                  href="download/acme-doc-2.0.1.pdf"
                  download="RUT PrevlalentWare.pdf"
                >
                  RUT PrevlalentWare
                  <button className={style_dialog.icons_modal_movil}>
                    <i className="fas fa-file-pdf"></i>
                  </button>
                </a>
                <a
                  href="download/acme-doc-2.0.1.pdf"
                  download="Logo PrevlalentWare.pdf"
                >
                  Logo PrevlalentWare
                  <button className={style_dialog.icons_modal_movil}>
                    <i className="fas fa-file-pdf"></i>
                  </button>
                </a>
                <a
                  href="download/acme-doc-2.0.1.pdf"
                  download="Acta de constitucion PrevlalentWare.pdf"
                >
                  Acta de constitucion PrevlalentWare
                  <button className={style_dialog.icons_modal_movil}>
                    <i className="fas fa-file-pdf"></i>
                  </button>
                </a>
                <a
                  href="download/acme-doc-2.0.1.pdf"
                  download="Camara de comercio PrevlalentWare.pdf"
                >
                  Camara de comercio PrevlalentWare
                  <button className={style_dialog.icons_modal_movil}>
                    <i className="fas fa-file-pdf"></i>
                  </button>
                </a>
                <a
                  href="download/acme-doc-2.0.1.pdf"
                  download="Otro documento PrevlalentWare.pdf"
                >
                  Otro documento PrevlalentWare
                  <button className={style_dialog.icons_modal_movil}>
                    <i className="fas fa-file-pdf"></i>
                  </button>
                </a>
              </div>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
}
export async function getServerSideProps() {
  //Conect with db
  await conectardb();
  //Use model in order to get information
  const res = await Corporation.find({});
  //Parse ID to string
  var corporations = res.map((doc) => {
    const corp = doc.toObject();
    corp._id = `${corp._id}`;
    return corp;
  });
  //Information that we´re giving
  // corporations = corporations[0];
  return {
    props: { corporations },
  };
}

function get_information_right(corporations) {
  //Information that we´re giving
  console.log(corporations[0].corporations[0]);

  var element = document.getElementById("nombre_empresa");
  var nit = document.getElementById("NIT");
  var number_employee = document.getElementById("number_employee");
  var razon_social = document.getElementById("razon_social");
  var identification = document.getElementById("identification");
  var num_empresa = document.getElementById("Numero de empresa");

  // removing everything inside the node
  while (element.firstChild) {
    element.removeChild(element.firstChild);
  }
  // removing everything inside the node
  while (nit.firstChild) {
    nit.removeChild(nit.firstChild);
  }
  // removing everything inside the node
  while (number_employee.firstChild) {
    number_employee.removeChild(number_employee.firstChild);
  }
  // removing everything inside the node
  while (razon_social.firstChild) {
    razon_social.removeChild(razon_social.firstChild);
  }
  // removing everything inside the node
  while (identification.firstChild) {
    identification.removeChild(identification.firstChild);
  }
  while (num_empresa.firstChild) {
    num_empresa.removeChild(num_empresa.firstChild);
  }

  // appending new text node
  element.appendChild(
    document.createTextNode(corporations[0].corporations[1].name)
  );
  // appending new text node
  nit.appendChild(document.createTextNode(corporations[0].corporations[1].NIT));
  // appending new text node
  number_employee.appendChild(
    document.createTextNode(corporations[0].corporations[1].numero_empleados)
  );
  // appending new text node
  razon_social.appendChild(
    document.createTextNode(corporations[0].corporations[1].razon_social)
  );
  // appending new text node
  identification.appendChild(
    document.createTextNode(corporations[0].corporations[1].identificacion)
  );
  // appending new text node
  num_empresa.appendChild(
    document.createTextNode("Empresa 2 de 2 pendientes para aprobacion")
  );
}

function get_information_left(corporations) {
  //Information that we´re giving
  console.log(corporations[0].corporations[0]);

  var element = document.getElementById("nombre_empresa");
  var nit = document.getElementById("NIT");
  var number_employee = document.getElementById("number_employee");
  var razon_social = document.getElementById("razon_social");
  var identification = document.getElementById("identification");
  var num_empresa = document.getElementById("Numero de empresa");

  // removing everything inside the node
  while (element.firstChild) {
    element.removeChild(element.firstChild);
  }
  // removing everything inside the node
  while (nit.firstChild) {
    nit.removeChild(nit.firstChild);
  }
  // removing everything inside the node
  while (number_employee.firstChild) {
    number_employee.removeChild(number_employee.firstChild);
  }
  // removing everything inside the node
  while (razon_social.firstChild) {
    razon_social.removeChild(razon_social.firstChild);
  }
  // removing everything inside the node
  while (identification.firstChild) {
    identification.removeChild(identification.firstChild);
  }
  while (num_empresa.firstChild) {
    num_empresa.removeChild(num_empresa.firstChild);
  }

  // appending new text node
  element.appendChild(
    document.createTextNode(corporations[0].corporations[0].name)
  );
  // appending new text node
  nit.appendChild(document.createTextNode(corporations[0].corporations[0].NIT));
  // appending new text node
  number_employee.appendChild(
    document.createTextNode(corporations[0].corporations[0].numero_empleados)
  );
  // appending new text node
  razon_social.appendChild(
    document.createTextNode(corporations[0].corporations[0].razon_social)
  );
  // appending new text node
  identification.appendChild(
    document.createTextNode(corporations[0].corporations[0].identificacion)
  );
  num_empresa.appendChild(
    document.createTextNode("Empresa 1 de 2 pendientes para aprobacion")
  );
}
