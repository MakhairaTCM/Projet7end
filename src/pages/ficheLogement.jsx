import React from "react";
import { useParams } from "react-router-dom";
import Header from "../components/Header";
import Collapse from "../components/Collapse";
import Footer from "../components/Footer";
import ImageSlider from "../components/Slider";
import StarRating from "../components/StarRating";
import apartments from "../datas/datas_test.json";
import Error from "./page404"; 

function Appartments() {
    const { id } = useParams(); // Obtenez l'ID de l'appartement à partir des paramètres d'URL
    const dataAppartments = apartments.find((data) => data.id === id); // Trouvez les données de l'appartement correspondant à l'ID

    if (!dataAppartments) {
        return <Error />; // Affichez la page d'erreur si les données de l'appartement ne sont pas trouvées
    }

    // Fonction pour créer des balises de tags à partir des données de l'appartement
    const createTags = () =>
        dataAppartments.tags.map((tag, index) => (
            <span className="tags" key={`${tag}-${dataAppartments.id}-${index}`}>
                {tag}
            </span>
        ));

    // Divisez le nom de l'hôte en prénom et nom
    const nameParts = dataAppartments.host.name.split(" ");
    const firstName = nameParts[0];
    const lastName = nameParts[1];

    return (
        <div className="bodyFooter">
            <div className="marginBody conteent-wrapper">
                <Header />
                <div className="fiche-logement">
                    <ImageSlider pictures={dataAppartments.pictures} /> {/* Affichez le diaporama d'images */}
                </div>

                <section className="infoAndCollapse">
                    <div className="info">
                        <div className="infoLeft">
                            <h1>{dataAppartments.title}</h1>
                            <div>{dataAppartments.location}</div>
                            <div className="containerTag">{createTags()}</div>
                        </div>
                        <div className="infoRight">
                            <div className="infoHost">
                                <div className="hostName">
                                    <div className="hostFirstName">{firstName}</div>
                                    <div className="hostLastName">{lastName}</div>
                                </div>
                                <img className="hostPicture" src={dataAppartments.host.picture} alt={dataAppartments.host.name} />
                            </div>
                            <StarRating rating={dataAppartments.rating} /> {/* Affichez la notation en étoiles */}
                        </div>
                    </div>
                    <div className="collapse">
                        {/* Utilisation du composant Collapse pour afficher la description et les équipements */}
                        <Collapse header="Description" content={dataAppartments.description} />
                        <Collapse
                            header="Équipements"
                            content={
                                <ul>
                                    {dataAppartments.equipments.map((equipment, index) => (
                                        <li key={`${equipment}-${dataAppartments.id}-${index}`}>{equipment}</li>
                                    ))}
                                </ul>
                            }
                        />
                    </div>
                </section>
            </div>
            <Footer /> {/* Affichez le composant de pied de page */}
        </div>
    );
}

export default Appartments;
