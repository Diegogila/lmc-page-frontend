import React from "react";
import './AboutUs.css'
import { CallToAction } from "../CallToAction/CallToAction";
import left_photo from '../../assets/images/foto-izquierda.png'
import right_photo from '../../assets/images/foto-derecha.png'

function AboutUs(){
    return (
      <section className="about-us">
        <div className="about-us__content">
          <h1>¿Quienes somos?</h1>
          <p>
            Somos una agencia de marketing con un espíritu humano y amable,
            comprometida con el crecimiento y el éxito de nuestros clientes.
            Nuestra misión es crear estrategias innovadoras y efectivas que
            conecten con tu audiencia y generen resultados impactantes.
          </p>
          <CallToAction text="Conocenos mas"/>
          <img className="image-left" src={left_photo} alt="Mariel y Sam"/>
          <img className="image-right" src={right_photo} alt="Mariel y Sam"/>
        </div>
      </section>
    );
}

export {AboutUs}