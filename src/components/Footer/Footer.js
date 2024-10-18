import React from "react";
import './Footer.css'

function Footer(){
    return (
        <footer>
            <div>
                <img src="#" alt="logo"/>
            </div>
            <div>
                <div>
                    <h3>MENU</h3>
                    <ul>
                        <li><a href="#Inicio">Inicio</a></li>
                        <li><a href="#Servicios">Servicios</a></li>
                        <li><a href="#Nosotros">Nosotros</a></li>
                        <li><a href="#Cursos">Cursos</a></li>
                        <li><a href="#Blog">Blog</a></li>
                        <li><a href="#Conrtacto">Conrtacto</a></li>
                    </ul>
                </div>
                <div>
                    <h3>UBICACION</h3>
                    <p>Calle y numero</p>
                    <p>Colonia, Codigo Postal</p>
                    <p>Ciudad, Estado Pais</p>
                    <p>Telefono: #########</p>
                </div>
                <div>
                    <h3>HORARIOS DE ATENCION</h3>
                    <p>Lunes a Viernes</p>
                    <p>09:00 A.M. - 6:00 P.M.</p>
                </div>
            </div>
        </footer>
    );
}

export {Footer}