import "./App.css";
import CultureAppBar from "./components/AppBar";

import PropositoDecide from "./pilares/PropositoDecide";
import SejaTransformador from "./pilares/SejaTransformador";
import ErreOndeNinguemErrou from "./pilares/ErreOndeNinguemErrou";
import SomosNerds from "./pilares/SomosNerds";
import SomosColaborativos from "./pilares/SomosColaborativos";
import ResolvaOProblemaCerto from "./pilares/ResolvaOProblemaCerto";
import ZupperAjudaZupper from "./pilares/ZupperAjudaZupper";
import VaiQueDaConfia from "./pilares/VaiQueDaConfia";
import AprendizadoAcimaDoPlano from "./pilares/AprendizadoAcimaDoPlano";
import TimeForaDaCurva from "./pilares/TimeForaDaCurva";
import SejaautenticoSeExponha from "./pilares/SejaAutenticoSeExponha";
import RespeitoEInclusao from "./pilares/RespeitoEInclusao";
import SomosGuardioes from "./pilares/SomosGuardioes";
import CustomerLovers from "./pilares/CustomerLovers";

function App() {
  return (

    <div className="App">
      <CultureAppBar />
      <div className="Card">
        <PropositoDecide />
      </div>
      <div className="Card">
        <SejaTransformador />
      </div>
      <div className="Card">
        <ErreOndeNinguemErrou />
      </div>
      <div className="Card">
        <SomosNerds />
      </div>
      <div className="Card">
        <SomosColaborativos />
      </div>
      <div className="Card">
        <ResolvaOProblemaCerto />
      </div>
      <div className="Card">
        <ZupperAjudaZupper />
      </div>
      <div className="Card">
        <VaiQueDaConfia />
      </div>
      <div className="Card">
        <AprendizadoAcimaDoPlano />
      </div>
      <div className="Card">
        <TimeForaDaCurva />
      </div>
      <div className="Card">
        <SejaautenticoSeExponha />
      </div>
      <div className="Card">
        <RespeitoEInclusao />
      </div>
      <div className="Card">
        <SomosGuardioes />
      </div>
      <div className="Card">
        <CustomerLovers />
      </div>
    </div>
  );
}

export default App;
