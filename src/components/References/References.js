import React from "react";
import './References.css'

function References(){
    return (
      <section className="references">
        <div className="clients__title-content">
          <img src="#" alt="Lo que nuestros clientes dicen" />
        </div>
        <div className="references__card-container">
          <div className="references__card">
            <div className="card__image-container">
              <img src="#" alt="" />
            </div>
            <p>
              Por medio del presente se hace de manifiesto la total satisfacción
              de los servicios prestados por LET'S MOVE CONSULTING, derivada de
              las sesiones de capacitación y asesoramiento que se recibieron;
              las cuales se caracterizaron por su dinamismo, pertinencia y gran
              profesionalidad. Debido a lo anterior y, con toda seguridad de su
              calidad y experiencia se la recomienda ampliamente.
            </p>
            <p>MIOE. Miguel Ángel Ley Sánchez</p>
          </div>
        </div>
      </section>
    );
}

export {References}