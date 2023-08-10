import React, { useState } from 'react';
import chevron from "../assets/images/Vector.svg"; 


const Collapse = ({ content, header }) => {
  // Utilisation du hook d'état 'useState' pour gérer l'état d'activation
  const [isActive, setIsActive] = useState(false);

  // Fonction pour basculer l'état d'activation de l'accordéon
  const toggleAccordion = () => {
    setIsActive((prevIsActive) => !prevIsActive);
  };

  return (
    <div className={`accordion ${isActive ? 'active' : ''}`}>
      {/* En-tête de l'accordéon avec un clic pour activer/désactiver */}
      <div className="accordion-item-header" onClick={toggleAccordion}>
        {header} {/* Affichage du contenu de l'en-tête */}
        <img src={chevron} alt="" /> {/* Icône chevron pour indiquer l'état */}
      </div>
      
      {/* Corps de l'accordéon avec une hauteur maximale en fonction de l'état d'activation */}
      <div className="accordion-item-body" style={{ maxHeight: isActive ? '1000px' : 0 }}>
        <div className="accordion-item-body-content">{content}</div> {/* Contenu du corps de l'accordéon */}
      </div>
    </div>
  );
};

// Export du composant 'Collapse' pour une utilisation ailleurs dans l'application
export default Collapse;
