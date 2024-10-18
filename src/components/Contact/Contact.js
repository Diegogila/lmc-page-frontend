import React from "react";
import './Contact.css'
import { CallToAction } from "../CallToAction/CallToAction";

function Contact(){
    return (
      <section className="contact">
        <div className="contact__container">
          <div className="contact__title">
            <img src="#" alt="¿Listo para impulsar tu negocio?"/>
            <p>Contactanos y toma la dirección correcta para tu negocios.</p>
          </div>
          <div className="contact__form">
            <img src="#" alt="image"/>
            <form>
              <label>
                Nombre:
                <input name="name" type="text"/>
              </label>
              <label>
                Email:
                <input name="email" type="email"/>
              </label>
              <label>
                Telefono:
                <input name="telephone" type="number"/>
              </label>
              <label>
                Servicio de interes:
                <select name="service">
                  <option value="">Servicio de interes</option>
                </select>
              </label>
              <label>
                Mensaje:
                <textarea name="message"></textarea>
              </label>
              <CallToAction/>
            </form>
          </div>
        </div>
      </section>
    );
}

export {Contact}