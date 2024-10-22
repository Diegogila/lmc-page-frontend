import React from "react";
import './CallToAction.css'

function CallToAction({text}){
    return (
      <button className="call-to-action">{text}</button>
    );
}

export {CallToAction}