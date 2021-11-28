import React from "react";

export const Navbar = () => {
  return (
    <nav>
      <style jsx>
        {`
          ul {
            list-style-type: none;
            margin: 0;
            padding: 0;
            overflow: hidden;
            background-color: #333;
            display: flex;
            justify-content: space-around;
          }

          li {
            float: left;
          }

          li a {
            display: inline-block;
            color: white;
            text-align: center;
            padding: 17px 19px;
            text-decoration: none;
          }

          li a:hover {
            background-color: #111;
          }

          .dropbtn {
            
            text-shadow: transparent;
            color: transparent;
            text-decoration: none;
          }

          .dropdown {

            text-shadow: transparent;
            color: transparent;
            text-decoration: none;
          }

          .dropdown-content {
            
            text-shadow: transparent;
            color: transparent;
            text-decoration: none;
          }

          .dropdown-content a {
            text-shadow: transparent;
            color: transparent;
            text-decoration: none;
          }

          .dropdown-content a:hover {
            text-shadow: transparent;
            color: transparent;
            text-decoration: none;
          }

          .dropdown:hover .dropdown-content {
            
            text-shadow: transparent;
            color: transparent;
            text-decoration: none;
          }

          @media (max-width: 600px) {
            .hide {
              font: 0/0 a;
              text-shadow: transparent;
              color: transparent;
              text-decoration: none;
            }

            .dropbtn {
              display: inline-block
              background-color: #4caf50;
              left: -5%;
              color: white;
              padding: 16px;
              font-size: 16px;
              border: none;
              cursor: pointer;
            }

            .dropdown {
              position: absolute;
              display: inline-block;
            }

            .dropdown-content {
              display: none;
              position: absolute;
              background-color: gray;
              min-width: 160px;
              box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
            }

            .dropdown-content a {
              color: black;
              padding: 12px 16px;
              text-decoration: none;
              display: block;
            }

            .dropdown-content a:hover {
              background-color: #333;
            }

            .dropdown:hover .dropdown-content {
              display: block;
            }
          }
        `}
      </style>
      <ul id="menu">
        <li>
          <a>Gente prevalente</a>
        </li>
        <li className="hide">
          <a>Buscar</a>
        </li>
        <li className="hide">
          <a>Administracion</a>
        </li>
        <li className="hide">
          <a>Empleo</a>
        </li>
        <li className="hide">
          <a>Mi CV</a>
        </li>
        <li className="hide">
          <a>Daniel</a>
        </li>
        {/* Here´s start responsive */}
        <div className="dropdown">
          <button className="dropbtn"> Dropdown </button>
          <div className="dropdown-content">
            <a href="#"> Link 1 </a>
            <a href="#"> Link 2 </a>
            <a href="#"> Link 3 </a>
          </div>
        </div>
      </ul>
    </nav>
  );
};
export default Navbar;
