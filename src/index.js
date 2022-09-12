import React from "react";
import ReactDOM from "react-dom/client";
import AprendizadoAcimaDoPlano from "./views/AprendizadoAcimaDoPlano.js";
import CustomerLovers from "../src/views/CustomerLovers.js";

import Home from "./views/Home.js";
import ErreOndeNinguemErrou from "./views/ErreOndeNinguemErrou.js";
import PropositoDecide from "./views/PropositoDecide.js";
import ResolvaOProblemaCerto from "./views/ResolvaOProblemaCerto.js";
import RespeitoEInclusao from "./views/RespeitoEInclusao.js";
import SejaautenticoSeExponha from "./views/SejaAutenticoSeExponha.js";
import SejaTransformador from "./views/SejaTransformador.js";
import SomosColaborativos from "./views/SomosColaborativos.js";
import SomosGuardioes from "./views/SomosGuardioes.js";
import SomosNerds from "./views/SomosNerds.js";
import TimeForaDaCurva from "./views/TimeForaDaCurva.js";
import VaiQueDaConfia from "./views/VaiQueDaConfia.js";
import ZupperAjudaZupper from "./views/ZupperAjudaZupper.js";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Home />
    <CustomerLovers />
    <AprendizadoAcimaDoPlano />
    <ErreOndeNinguemErrou />
    <PropositoDecide />
    <ResolvaOProblemaCerto />
    <RespeitoEInclusao />
    <SejaautenticoSeExponha />
    <SejaTransformador />
    <SomosColaborativos />
    <SomosGuardioes />
    <SomosNerds />
    <TimeForaDaCurva />
    <VaiQueDaConfia />
    <ZupperAjudaZupper />
  </React.StrictMode>
);
