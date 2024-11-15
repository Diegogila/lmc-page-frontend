import React from "react";
import "./AboutUs.css";
import { CallToAction } from "../CallToAction/CallToAction";
import left_photo from "../../assets/images/foto-izquierda.png";
import right_photo from "../../assets/images/foto-derecha.png";
import frase from "../../assets/images/frase_banner.png";

function AboutUs() {
  return (
    <section className="about-us">
        <svg
          width="179"
          height="1024"
          viewBox="0 0 179 1024"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M31.8708 1.54571C31.8708 1.54571 253.658 193.532 64.579 520.516C-124.5 847.5 177.5 1022 177.5 1022"
            stroke="#EBC9C8"
            stroke-width="3"
          />
        </svg>
        <svg
          width="179"
          height="1024"
          viewBox="0 0 179 1024"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M31.8708 1.54571C31.8708 1.54571 253.658 193.532 64.579 520.516C-124.5 847.5 177.5 1022 177.5 1022"
            stroke="#EBC9C8"
            stroke-width="3"
          />
        </svg>
        <svg
          width="245"
          height="1185"
          viewBox="0 0 245 1185"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M110 1.50001C110 1.50001 -246.5 206.5 110 605C466.5 1003.5 -5.5 1183 -5.5 1183"
            stroke="#EBC9C8"
            stroke-width="3"
          />
        </svg>
        <svg
          width="170"
          height="936"
          viewBox="0 0 170 936"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M-64.0048 1.17433C-64.0048 1.17433 -230.171 204.301 64.1849 505.126C358.541 805.952 -64.0047 934 -64.0047 934"
            stroke="#EBC9C8"
            stroke-width="3"
          />
        </svg>
      <div className="about-us__content">
        <img className="about-us__title" src={frase} alt="¿Quienes somos?" />
        <p>
          Somos una agencia de marketing con un espíritu humano y amable,
          comprometida con el crecimiento y el éxito de nuestros clientes.
          Nuestra misión es crear estrategias innovadoras y efectivas que
          conecten con tu audiencia y generen resultados impactantes.
        </p>
        <CallToAction text="Conocenos mas" />
        <img
          className="about-us__image image-left"
          src={left_photo}
          alt="Mariel y Sam"
        />
        <img
          className="about-us__image image-right"
          src={right_photo}
          alt="Mariel y Sam"
        />
      </div>
    </section>
  );
}

export { AboutUs };
