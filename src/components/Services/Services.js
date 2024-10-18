import React from "react";
import './Services.css'
import { CallToAction } from "../CallToAction/CallToAction";

function Services(){
    return (
      <section className="services">
        <h1>Nuestros Servicios</h1>
        <div className="services__card-container">
          <div className="services__card">
            <div className="card__image-container">
              <img src="#" alt="" />
            </div>
            <h3>Servicio</h3>
            <p>Descripcion breve del servicio.</p>
            <CallToAction text="Learn more" />
          </div>
          <div className="services__card">
            <div className="card__image-container">
              <img src="#" alt="" />
            </div>
            <h3>Servicio</h3>
            <p>Descripcion breve del servicio.</p>
            <CallToAction text="Learn more" />
          </div>
          <div className="services__card">
            <div className="card__image-container">
              <img src="#" alt="" />
            </div>
            <h3>Servicio</h3>
            <p>Descripcion breve del servicio.</p>
            <CallToAction text="Learn more" />
          </div>
          <div className="services__card">
            <div className="card__image-container">
              <img src="#" alt="" />
            </div>
            <h3>Servicio</h3>
            <p>Descripcion breve del servicio.</p>
            <CallToAction text="Learn more" />
          </div>
          <p>
            En Let's Move Consulting, entendemos que cada negocio es único. Por
            eso, nuestros planes son personalizados, asegurando que recibas los
            servicios más adecuados para tu empresa. Nuestro objetivo es
            transformar negocios en historias de éxito.
          </p>
          <CallToAction text="¡Descrubre como podemos ayudarte a alcanzar el éxito!"/>
        </div>
      </section>
    );
}

export {Services}