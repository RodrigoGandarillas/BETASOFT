import React, { Component } from "react";
import ImagenUsuario from "../assets/usuario.png";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { faPlayCircle } from "@fortawesome/free-regular-svg-icons";
import { faSquare } from "@fortawesome/free-regular-svg-icons";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import Cookies from "universal-cookie";
import { render } from "@testing-library/react";

const cookies = new Cookies();

class NavegacionInstructor extends Component {
  cerrarSesion = () => {
    cookies.remove("id_usuario", { path: "/" });
    cookies.remove("nombre", { path: "/" });
    cookies.remove("apellido_paterno", { path: "/" });
    cookies.remove("apellido_materno", { path: "/" });
    cookies.remove("email", { path: "/" });
    cookies.remove("username", { path: "/" });
    cookies.remove("id_instructor", { path: "/" });
    cookies.remove("estudiante", { path: "/" });
    cookies.remove("admin", { path: "/" });
    window.location.href = "./";
  };
  render() {
    console.log("id_usuario" + cookies.get("id_usuario"));
    console.log("nombre" + cookies.get("nombre"));
    console.log("apellido_paterno" + cookies.get("apellido_paterno"));
    console.log("apellido_materno" + cookies.get("apellido_materno"));
    console.log("email" + cookies.get("email"));
    console.log("id_instructor" + cookies.get("id_instructor"));
    console.log("username" + cookies.get("username"));
    console.log("passwd" + cookies.get("passwd"));
    console.log("id_instructor" + cookies.get("id_instructor"));
    console.log("estudiante" + cookies.get("estudiante"));
    console.log("admin" + cookies.get("admin"));
    return (
      <div>
        <div>
          <nav class="navbar navbar-light bg-light " id="navInstructor">
            <div class="mr-left">
              <label for="boton-menu" className="icono-menu">
                <FontAwesomeIcon icon={faBars} />
              </label>

              <a
                id="logo-betasoft"
                class="navbar-brand"
                href="#"
                border-width="medium"
              >
                BETAWEB
                <img
                  src="https://previews.123rf.com/images/mochipet/mochipet1707/mochipet170700056/82167896-ilustraci%C3%B3n-vectorial-bombilla-con-haces-de-luz-en-estilo-pop-art-dibujos-animados-con-contorno-aisl.jpg"
                  width="30"
                  height="30"
                  class="d-inline-block align-top"
                  alt="logo BETAWEB"
                />
              </a>
            </div>
            <div class="mr-right">
              <div class="p-2 bd-highlight ">
                <button
                  id="Boton_cerrar"
                  className="btn "
                  type="button"
                  onClick={() => this.cerrarSesion()}
                >
                  Cerrar sesión
                </button>
              </div>
            </div>
          </nav>
        </div>
        <input type="checkbox" id="boton-menu" />
        <div className="container-menu">
          <div class="cont-menu">
            <nav>
              <div className="foto-y-nombre">
                <img
                  src={ImagenUsuario}
                  alt="foto de perfil"
                  className="foto-usuario"
                />
                <h3 className="nombre-usuario">
                  {cookies.get("nombre")} {cookies.get("apellido_paterno")}{" "}
                  {cookies.get("apellido_materno")}
                </h3>
              </div>
              <div className="menu-instructor">
                <h2 className="texto-menu">Menú</h2>
                <div className="botones-menu-instructor">
                  <a
                    href="/instructor"
                    type="button"
                    className="boton-inicio-instructor text-white"
                  >
                    <div className="icono-inicio-cursos-instructor">
                      <FontAwesomeIcon icon={faHome} />
                    </div>
                    <span>Inicio</span>
                  </a>

                  <a
                    href="/VistaInstructor"
                    type="button"
                    type="button"
                    className="boton-cursos-instructor  text-white"
                  >
                    <div className="icono-inicio-cursos-instructor icono-boton-instructor">
                      <FontAwesomeIcon icon={faPlayCircle} />{" "}
                    </div>
                    <span>Mis Cursos</span>
                  </a>
                </div>
              </div>
            </nav>
          </div>
          <label for="boton-menu" className="icon-equis">
            <FontAwesomeIcon icon={faTimes} />
          </label>
        </div>
      </div>
    );
  }
}

export default NavegacionInstructor;
