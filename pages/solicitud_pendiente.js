import React from "react";
import Navbar from "../components/Navbar/Navbar";
// Styles
import styles from "../styles/solicitud_pendiente.module.css";

const solicitud_pendiente = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className={styles.container_subtitle}>
        <h2 className={styles.subtitle}>Administración</h2>
        <h2 className={styles.subtitle_posActual}> / Aprobación de Empresas</h2>
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
            <h2 className={styles.letras}>Nombre de la empresa</h2>
            <div className={styles.separador_empresa}></div>
            <div className={styles.identificacion}>Tipo de identificacion</div>
            <div className={styles.separador_identificacion}></div>
            <div className={styles.num_empleados}> # de empleados</div>
            <div className={styles.separador_empleados}></div>
            <div className={styles.razon_social}>Razon social</div>
            <div className={styles.separador_social}></div>
            <div className={styles.identificacion_empresa}>Identificacion</div>
            <div className={styles.separador_identificacion_empresa}></div>

            <div className={styles.card_archivos}>
              <bottom className={styles.logo_archivos}>
                <i className="fas fa-paperclip"></i>
              </bottom>
              <div className={styles.archivos_letra}>Archivos adjuntos</div>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
};

export default solicitud_pendiente;
