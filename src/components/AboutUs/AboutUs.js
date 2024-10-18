import React from "react";
import './AboutUs.css'
import { CallToAction } from "../CallToAction/CallToAction";

function AboutUs(){
    return (
      <section className="about-us">
        <h1>¿Quienes somos?</h1>
        <p>
          Somos una agencia de marketing con un espíritu humano y amable,
          comprometida con el crecimiento y el éxito de nuestros clientes.
          Nuestra misión es crear estrategias innovadoras y efectivas que
          conecten con tu audiencia y generen resultados impactantes.
        </p>
        <CallToAction text="Conocenos mas"/>
      </section>
    );
}

export {AboutUs}