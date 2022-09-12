import React from "react";
import { BrowserRouter , Route } from "react-router-dom";
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

export default function Routes() {
  return (
    <BrowserRouter>
         
        <Route path="/" exact component={Home} />
        <Route path="/aprendizadoacimadoplano" exact component={AprendizadoAcimaDoPlano} />
        <Route path="/customerLovers" exact component={CustomerLovers} />
        <Route path="/erreondeninguemerrou" exact component={ErreOndeNinguemErrou} />
        <Route path="/propositodecide" exact component={PropositoDecide} />
        <Route path="/resolvaoproblemacerto" exact component={ResolvaOProblemaCerto} />
        <Route path="/respeitoeicnlusao" exact component={RespeitoEInclusao} />
        <Route path="/sejaautenticoseexponha" exact component={SejaautenticoSeExponha} />
        <Route path="/sejatransformador" exact component={SejaTransformador} />
        <Route path="/somoscolaborativos" exact component={SomosColaborativos} />
        <Route path="/somosguardioes" exact component={SomosGuardioes} />
        <Route path="/somosnerds" exact component={SomosNerds} />
        <Route path="/timeforadacurva" exact component={TimeForaDaCurva}/>
        <Route path="/vaiquedaconfia" exact component={VaiQueDaConfia} />
        <Route path="/zupperajudazupper" exact component={ZupperAjudaZupper} />
      
    </BrowserRouter>
  );
  }
