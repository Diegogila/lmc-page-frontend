import React from "react";
import './Hero.css'
import nave from '../../assets/images/2.-NAVE---BANNER-1.png'
import foco from '../../assets/images/2.-FOCO---BANNER-1.png'
import title from '../../assets/images/2.-FRASE---BANNER-1.png'
import { CallToAction } from "../CallToAction/CallToAction";

function Hero(){
    return (
      <>
        <section className="hero">
          <div className="hero__content">
            <img className="hero__title" src={title} alt="Transformamos tus ideas en realidad" />
            <p>
              Somos una agencia de marketing que ve tu potencial como infinito.
              En Let's Move Consulting, convertimos tus ideas en éxitos tangibles,
              impulsando el crecimiento de tu negocio.
            </p>
            <CallToAction text="Descubre nuestros servicios"/>
            <img className="hero__icon hero__icon--lightbulb" src={foco} alt="decoracion foco"/>
            <img className="hero__icon hero__icon--ship"src={nave} alt="decoracion nave"/>
          </div>
        </section>
        <svg className="curve" width="1440" height="155" viewBox="0 0 1440 155" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 0H1440V155C1440 155 1091 45.1058 720 45.1058C349 45.1058 0 155 0 155V0Z" fill="#7782A5"/>
        </svg>
      </>
    );
}

export {Hero}