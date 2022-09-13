import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "../views/Home.js";
import AprendizadoAcimaDoPlano from "../views/AprendizadoAcimaDoPlano.js";
import CustomerLovers from "../views/CustomerLovers.js";
import ErreOndeNinguemErrou from "../views/ErreOndeNinguemErrou.js";
import PropositoDecide from "../views/PropositoDecide.js";
import ResolvaOProblemaCerto from "../views/ResolvaOProblemaCerto.js";
import RespeitoEInclusao from "../views/RespeitoEInclusao.js";
import SejaautenticoSeExponha from "../views/SejaAutenticoSeExponha.js";
import SejaTransformador from "../views/SejaTransformador.js";
import SomosColaborativos from "../views/SomosColaborativos.js";
import SomosGuardioes from "../views/SomosGuardioes.js";
import SomosNerds from "../views/SomosNerds.js";
import TimeForaDaCurva from "../views/TimeForaDaCurva.js";
import VaiQueDaConfia from "../views/VaiQueDaConfia.js";
import ZupperAjudaZupper from "../views/ZupperAjudaZupper.js";

export default function Navigation() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/aprendizadoacimadoplano"
          element={<AprendizadoAcimaDoPlano />}
        />
        <Route
          path="/customerlovers"
          element={<CustomerLovers />}/>
          <Route 
          path="/erreondeninguemerrou"
          element={<ErreOndeNinguemErrou />}
        />
        <Route path="/propositodecide" element={<PropositoDecide />} />
        <Route
          path="/resolvaoproblemacerto"
          element={<ResolvaOProblemaCerto />}
        />
        <Route path="/respeitoeinclusao" element={<RespeitoEInclusao />} />
        <Route
          path="/sejaautenticoseexponha"
          element={<SejaautenticoSeExponha />}
        />
        <Route path="/sejatransformador" element={<SejaTransformador />} />
        <Route path="/somoscolaborativos" element={<SomosColaborativos />} />
        <Route path="/somosguardioes" element={<SomosGuardioes />} />
        <Route path="/somosnerds" element={<SomosNerds />} />
        <Route path="/timeforadacurva" element={<TimeForaDaCurva />} />
        <Route path="/vaiquedaconfia" element={<VaiQueDaConfia />} />
        <Route path="/zupperajudazupper" element={<ZupperAjudaZupper />} />
      </Routes>
    </BrowserRouter>
  );
}
