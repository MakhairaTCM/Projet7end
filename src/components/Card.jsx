import React from 'react';
import { Link } from "react-router-dom";


function Card({ id, cover, title }) {
    return (
        // Utilisation de la balise 'article' pour représenter un article de la liste de cartes
        <article>
           
            <Link 
                to={`/appartment/${id}`} // Lien dynamique avec l'ID de l'appartement
                aria-label={`Voir les détails de ${title}`} // Attribut d'accessibilité pour l'écran
            >
                
                <img src={cover} alt={title} title={title} className='cardImg' />
                
                <h2>{title}</h2>
            </Link>
        </article>
    );
}

// Export du composant 'Card' pour une utilisation ailleurs dans l'application
export default Card;
