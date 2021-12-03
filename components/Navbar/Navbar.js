import React from "react";
import styles from "../../styles/navbar.module.css";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
// We´re importing a image
import logo from "../../public/images/logo.png";
export const Navbar = () => {
  return (
    <>
      <head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        ></meta>
      </head>
      <Script
        src="https://kit.fontawesome.com/b20e2ae983.js"
        crossOrigin="anonymous"
      ></Script>
      <body className={styles.body}>
        <header className={styles.header}>
          <nav className={styles.nav}>
            <div className={styles.logo_name}>
              <a className={styles.image}>
                <Image src={logo} height={68} width={68} alt={"Mar"}></Image>
              </a>
              <Link href="/">
                <a className={styles.logo}>Gente PreValente</a>
              </Link>
            </div>
            <button className={styles.nav_toggle}>
              <i className="fas fa-bars"></i>
            </button>
            <ul className={styles.nav_menu}>
              <li className={styles.nav_menu_item}>
                <button className={styles.boton}>
                  <i className="fas fa-search"></i>
                </button>
                <a href="#" className={styles.buscar}>
                  Buscar...
                </a>
              </li>
              <li className={styles.nav_menu_item}>
                <button className={styles.boton}>
                  <i className="fas fa-cogs"></i>
                </button>
                <a href="#" className={styles.nav_menu_link}>
                  Administracion
                </a>
              </li>
              <li className={styles.nav_menu_item}>
                <button className={styles.boton}>
                  <i className="fas fa-briefcase"></i>
                </button>
                <a href="#" className={styles.nav_menu_link}>
                  Empleo
                </a>
                <button className={styles.boton}>
                  <i className="fas fa-chevron-down"></i>
                </button>
              </li>
              <li className={styles.nav_menu_item}>
                <button className={styles.boton}>
                  <i className="far fa-file-alt"></i>
                </button>
                <a href="#" className={styles.nav_menu_link}>
                  Mi CV
                </a>
                <button className={styles.boton}>
                  <i className="fas fa-chevron-down"></i>
                </button>
              </li>
              <li className={styles.nav_menu_item}>
                <button className={styles.boton}>
                  <i className="fas fa-user-circle"></i>
                </button>
                <a href="#" className={styles.nav_menu_link}>
                  Mar
                </a>
                <button className={styles.boton}>
                  <i className="fas fa-chevron-down"></i>
                </button>
              </li>
            </ul>
          </nav>
        </header>
      </body>
    </>
  );
};
export default Navbar;
