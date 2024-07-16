import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cabecera from "components/Cabecera/Cabecera";
import Container from "components/Container/Container";
import Favoritos from "pages/Favoritos";
import Inicio from "pages/Inicio/Inicio";
import NuevoVideo from "components/NuevoVideo/NuevoVideo"; 
import Pie from "components/Pie/Pie";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Cabecera />
      <Container>
      <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/nuevo-video" element={<NuevoVideo />} /> 
        </Routes>
      </Container>
      <Pie/>
    </BrowserRouter>
  );
}

export default AppRoutes;
