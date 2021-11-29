import React from "react";
import styles from "../../styles/navbar.module.css";
import Image from "next/image";
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
        <script
          src="https://kit.fontawesome.com/b20e2ae983.js"
          crossorigin="anonymous"
        ></script>
      </head>
      <body className={styles.body}>
        <header className={styles.header}>
          <nav className={styles.nav}>
            <div className={styles.logo_name}>
              <a className={styles.image}>
                <Image src={logo} height={68} width={68} alt={"Mar"}></Image>
              </a>
              <a href="#" className={styles.logo}>
                Gente PreValente
              </a>
            </div>
            <button className={styles.nav_toggle}>
              <i class="fas fa-bars"></i>
            </button>
            <ul className={styles.nav_menu}>
              <li className={styles.nav_menu_item}>
                <button className={styles.buscar_icon}>
                  <i class="fas fa-search"></i>
                </button>
                <a href="#" className={styles.buscar}>
                  Buscar...
                </a>
              </li>
              <li className={styles.nav_menu_item}>
                <button>
                  <i class="fas fa-cogs"></i>
                </button>
                <a href="#" className={styles.nav_menu_link}>
                  Administracion
                </a>
              </li>
              <li className={styles.nav_menu_item}>
                <button>
                  <i class="fas fa-briefcase"></i>
                </button>
                <a href="#" className={styles.nav_menu_link}>
                  Empleo
                </a>
                <button>
                  <i class="fas fa-chevron-down"></i>
                </button>
              </li>
              <li className={styles.nav_menu_item}>
                <button>
                  <i class="far fa-file-alt"></i>
                </button>
                <a href="#" className={styles.nav_menu_link}>
                  Mi CV
                </a>
                <button>
                  <i class="fas fa-chevron-down"></i>
                </button>
              </li>
              <li className={styles.nav_menu_item}>
                <button>
                  <i class="fas fa-user-circle"></i>
                </button>
                <a href="#" className={styles.nav_menu_link}>
                  Daniel
                </a>
                <button>
                  <i class="fas fa-chevron-down"></i>
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
