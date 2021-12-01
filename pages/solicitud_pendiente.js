import React from "react";
import Navbar from "../components/Navbar/Navbar";
// Conexion DB
import conectardb from "../lib/mongodb";
// Models
import Corporation from "../models/corporations";
// Styles
import styles from "../styles/solicitud_pendiente.module.css";

export default function solicitud_pendiente(corporations) {
  console.log(corporations);
  return (
    <div className={styles.div_principal}>
      <Navbar></Navbar>
      <div className={styles.container_subtitle}>
        <h2 className={styles.subtitle}>Administración</h2>
        <h2 className={styles.subtitle_posActual}> / Aprobación de Empresas</h2>
      </div>
      <p className={styles.label_movil}>
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
      <button className={styles.arrow_left}>
        <i className="fas fa-chevron-left"></i>
      </button>
      <button className={styles.arrow_right}>
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
            <h2 className={styles.letra_nombre}>
              {corporations.corporations.name}
            </h2>
            <div className={styles.separador_empresa}></div>
            <div className={styles.identificacion}>Tipo de identificacion</div>
            {/* Back information */}
            <h2 className={styles.letra_NIT}>
              {corporations.corporations.NIT}
            </h2>
            <div className={styles.separador_identificacion}></div>

            <div className={styles.num_empleados}> # de empleados</div>
            {/* Back information */}
            <h2 className={styles.letra_employe}>
              {corporations.corporations.numero_empleados}
            </h2>
            <div className={styles.separador_empleados}></div>
            <div className={styles.razon_social}>Razon social</div>
            {/* Back information */}
            <h2 className={styles.letra_social}>{corporations.corporations.razon_social}</h2>
            <div className={styles.separador_social}></div>

            <div className={styles.identificacion_empresa}>Identificacion</div>
            {/* Back information */}
            <h2 className={styles.letra_identification}>{corporations.corporations.identificacion}</h2>
            <div className={styles.separador_identificacion_empresa}></div>

            <div className={styles.card_archivos}>
              <bottom className={styles.logo_archivos}>
                <i className="fas fa-paperclip"></i>
              </bottom>
              <div className={styles.archivos_letra}>Archivos adjuntos</div>
            </div>
            <p className={styles.archive_movil}>Documentos cargados</p>
          </div>
        </a>
      </div>
    </div>
  );
}

export async function getServerSideProps() {
  await conectardb();
  const res = await Corporation.find({});
  var corporations = res.map((doc) => {
    const corp = doc.toObject();
    corp._id = `${corp._id}`;
    return corp;
  });
  corporations = corporations[0];
  console.log(corporations);
  return {
    props: { corporations },
  };
}
