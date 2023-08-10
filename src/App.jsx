import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import APropos from "./pages/aPropos";
import Home from "./pages/Home";
import Appartment from "./pages/ficheLogement"
import Error from "./pages/page404";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aPropos" element={<APropos />} />
        <Route path="/appartment/:id" element={<Appartment />} errorElement={<Error />}/>
        <Route path="*" element={<Error />} errorElement={<Error />}/>
        <Route path="/error" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
