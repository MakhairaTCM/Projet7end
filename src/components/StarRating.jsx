import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar as solidStar } from '@fortawesome/free-solid-svg-icons';


const StarRating = ({ rating }) => {
  const maxStars = 5; // Nombre maximal d'étoiles
  const filledStars = Math.max(1, Math.min(maxStars, Math.round(rating))); // Calcul du nombre d'étoiles remplies

  return (
    <div className="star-rating">
      {/* Génération des étoiles en utilisant le composant 'FontAwesomeIcon' */}
      {Array.from({ length: maxStars }).map((_, index) => (
        <FontAwesomeIcon
          key={index}
          icon={solidStar} // Utilisation de l'icône d'étoile solide
          className={index < filledStars ? 'star-filled' : 'star-empty'} // Applique la classe 'star-filled' aux étoiles remplies, 'star-empty' aux étoiles vides
        />
      ))}
    </div>
  );
};

// Exportez le composant 'StarRating' pour une utilisation ailleurs dans l'application
export default StarRating;
