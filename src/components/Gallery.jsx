import React from 'react';
import Card from "./Card"; 
import apartments from "../datas/datas_test.json"; 


function Gallery() {
    // Vérifiez si 'apartments' est un tableau non vide
    if (Array.isArray(apartments) && apartments.length > 0) {
        return (
            // Section pour afficher la galerie d'appartements
            <section aria-label="Galerie appartements" className="sectionGalerie">
                {/* Parcourez chaque appartement et créez un composant 'Card' pour l'affichage */}
                {apartments.map(apartment => (
                    <Card
                        id={apartment.id}
                        title={apartment.title}
                        cover={apartment.cover}
                        key={apartment.id}
                    />
                ))}
            </section>
        );
    }
    
    return null; // Si la liste d'appartements est vide, ne renvoyez rien
}

// Exportez le composant 'Gallery' pour une utilisation ailleurs dans l'application
export default Gallery;
