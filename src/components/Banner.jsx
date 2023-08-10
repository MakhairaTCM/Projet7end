import React from 'react';
import { useLocation } from 'react-router-dom';

import bannerHome from "../assets/images/bannerHome.webp"; 
import bannerAPropos from "../assets/images/bannerAPropos.webp"; 


function Banner({ textContent }) {
  // Utilisez le hook 'useLocation' de 'react-router-dom' pour obtenir l'emplacement actuel
  const location = useLocation();

  // Déterminez quelle image de bannière utiliser en fonction du chemin actuel
  const bannerImage = location.pathname === "/aPropos" ? bannerAPropos : bannerHome;

  // Rendez la section de la bannière avec l'image de bannière appropriée et le contenu textuel
  return (
    <section aria-label="Bannière" className="banner">
      {/* Affichez l'image de la bannière en utilisant l'attribut 'src' */}
      <img src={bannerImage} alt="Bannière Kasa" title="Bannière Kasa" className='bannerImg' width="" height="223px"/>

      {/* Affichez le contenu textuel dans un élément <h2> avec la classe 'textBanner' */}
      <h2 className='textBanner'>{textContent}</h2>
    </section>
  );
}

// Exportez le composant 'Banner' pour une utilisation dans d'autres parties de l'application
export default Banner;
