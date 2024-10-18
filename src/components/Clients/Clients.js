import React from "react";
import './Clients.css'

function Clients(){
    return (
      <section className="clients">
        <div className="clients__title-content">
          <img src="#" alt='Nos enorgullece trabajar con visionarios que confian en nuestra magia'/>
        </div>
        <div className="clients__card-container">
          <div className="clients__card">
            <img src="#" alt="client"/>
          </div>
          <div className="clients__card">
            <img src="#" alt="client"/>
          </div>
          <div className="clients__card">
            <img src="#" alt="client"/>
          </div>
          <div className="clients__card">
            <img src="#" alt="client"/>
          </div>
          <div className="clients__card">
            <img src="#" alt="client"/>
          </div>
        </div>
      </section>
    );
}

export {Clients}