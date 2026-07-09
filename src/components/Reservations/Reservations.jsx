import React, { useEffect, useRef } from "react";
import "./Reservations.css";

const FormsAppPopup = () => {
  const buttonRef = useRef(null);

  useEffect(() => {
    // Evita cargar el script varias veces
    const existingScript = document.querySelector(
      'script[src="https://cdn.forms.app/embed.js"]'
    );

    const initializeForm = () => {
      if (window.formsapp) {
        new window.formsapp(
          "6a4529111c66db225ff000f9",
          "popup",
          {
             overlay: "rgba(45,45,45,0.5)",
           button: {
              text: "Make a Reservation",
            
                      },
            width: "800px",
            height: "600px",
            openingAnimation: {
              entrance: "animate__fadeIn",
              exit: "animate__fadeOut",
            },
          },
          "https://jz7g375i.forms.app"
        );
      }
    };

    if (!existingScript) {
      const script = document.createElement("script");
      script.src = "https://cdn.forms.app/embed.js";
      script.async = true;
      script.defer = true;
      script.onload = initializeForm;
      document.body.appendChild(script);
    } else {
      initializeForm();
    }
  }, []);

  return (
    <div className="reservation section-p">
      <div className="container">
        <div className="reservation-section" id="contact">
          <div className="section-title">
            <h3 className="text-brown">
              Reserva<span className="text-dark">tion</span>
            </h3>
            <p className="text">Make a Reservastion for your Trip</p>
          </div>

          <div className="reservation-button-wrapper">
            <button
              ref={buttonRef}
              className="btn-item text-white btn-item bg-brown  fw-4 ls-2"
              formsappid="6a4529111c66db225ff000f9"
            ></button>
          </div>
        </div>
      </div>
    </div>
  );
};


export default FormsAppPopup;
