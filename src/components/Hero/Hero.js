import React from "react";
import './Hero.css'
import title from '../../assets/images/2.-FRASE---BANNER-1.png'
import { CallToAction } from "../CallToAction/CallToAction";

function Hero(){
    return (
      <section className="hero">
        <div className="hero__content">
          <div className="hero__title">
            <img src={title} alt="Transformamos tus ideas en realidad" />
          </div>
          <p>
            Somos una agencia de marketing que ve tu potencial como infinito. En
            Let's Move Consulting, convertimos tus ideas en éxitos tangibles,
            impulsando el crecimiento de tu negocio.
          </p>
          <CallToAction text="Descubre nuestros servicios"/>
        </div>
      </section>
    );
}

export {Hero}