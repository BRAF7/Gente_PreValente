import Head from "next/head";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import Navbar from "../components/Navbar/Navbar";
import Script from "next/script";
export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Gente PreValente</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Script
        src="https://kit.fontawesome.com/b20e2ae983.js"
        crossOrigin="anonymous"
      ></Script>
      <Navbar></Navbar>
      <main className={styles.main}>
        <div className={styles.grid}>
          <Link href="./solicitud_pendiente">
            <a className={styles.card}>
              <div className={styles.card_empresa}>
                <div className={styles.logo_empresa}>
                  <i className="fas fa-industry"></i>
                </div>
              </div>
              <h2 className={styles.letras}>
                Solicitudes de creacion de empresas
              </h2>
              <div className={styles.separador}></div>
              <button className={styles.clock}>
                <i className="fas fa-clock"></i>
              </button>
              <div className={styles.solicitudes}>2 solicitudes sin tratar</div>
            </a>
          </Link>
          <a href="#" className={styles.card}>
            <div className={styles.card_empresa}>
              <div className={styles.logo_empresa}>
                <i className="fas fa-chart-bar"></i>
              </div>
            </div>
            <h2 className={styles.letras}>Indicadores</h2>
            <div className={styles.separador}></div>
            <button className={styles.clock}>
              <i className="fas fa-clock"></i>
            </button>
            <div className={styles.solicitudes}>Ultima visita: 31/01/2020</div>
          </a>

          <a className={styles.card}>
            <div className={styles.card_empresa}>
              <div className={styles.logo_empresa}>
                <i className="fas fa-user-alt"></i>
              </div>
            </div>
            <h2 className={styles.letras}>Inscripcion de empleados</h2>
            <div className={styles.separador}></div>
            <button className={styles.clock}>
              <i className="fas fa-clock"></i>
            </button>
            <div className={styles.solicitudes}>
              3 usuarios sin empresa registrada
            </div>
          </a>

          <a href="#" className={styles.card}>
            <div className={styles.card_empresa}>
              <div className={styles.logo_empresa_gestion}>
                <i className="far fa-id-card"></i>
              </div>
            </div>
            <h2 className={styles.letras}>Gestion de usuarios</h2>
            <div className={styles.separador}></div>
            <button className={styles.clock}>
              <i className="fas fa-clock"></i>
            </button>
            <div className={styles.solicitudes}>
              532 usuarios activos en la plataforma
            </div>
          </a>
        </div>
      </main>
    </div>
  );
}

// &#75;&#101;&#116;&#122;&#97;
// Twitter: @BrianTadeo1
// Contact: brianflores.dev@gmail.com
