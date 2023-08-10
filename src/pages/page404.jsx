import React from 'react';
import { Link } from "react-router-dom"

import Header from "../components/Header";
import Footer from "../components/Footer";





const page404 = () => {
    return (
        <div className="bodyFooter">
            <div className='marginBody'>
                <Header/>
                <div className='containerError'>
                    <div className='errorNumber'>404</div>
                    <p className='msgError'>Oups! La page que vous demandez n'existe pas.</p>
                    <Link 
                        to={`/`}
                        aria-label={``}>
                        Retourner sur la page d’accueil
                    </Link>
                </div>

            </div>
            <Footer/>
        </div>
    );
};

export default page404;