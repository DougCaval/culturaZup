
import './App.css';
import CultureAppBar from './components/AppBar';

import AprendizadoAcimaDoPlano from './pilares/AprendizadoAcimaDoPlano';
import CustomerLovers from './pilares/CustomerLovers';
import ErreOndeNinguemErrou from './pilares/ErreOndeNinguemErrou';
import PropositoDecide from './pilares/PropositoDecide';
import SomosNerds from './pilares/PropositoDecide copy';
import ResolvaOProblemaCerto from './pilares/ResolvaOProblemaCerto';
import RespeitoEInclusao from './pilares/RespeitoEInclusao';
import SejaautenticoSeExponha from './pilares/SejaAutenticoSeExponha';
import SejaTransformador from './pilares/SejaTransformador';
import SomosColaborativos from './pilares/SomosColaborativos';
import SomosGuardioes from './pilares/SomosGuardioes';
import TimeForaDaCurva from './pilares/TimeForaDaCurva';
import VaiQueDaConfia from './pilares/VaiQueDaConfia';
import ZupperAjudaZupper from './pilares/ZupperAjudaZupper';


function App() {
  return (
   
    <div className="App" align="center">
      <CultureAppBar/>
      <PropositoDecide/>
      <SejaTransformador/>
      <ErreOndeNinguemErrou/>
      <SomosNerds/>
      <SomosColaborativos/>
      <ResolvaOProblemaCerto/>
      <ZupperAjudaZupper/>
      <VaiQueDaConfia/>
      <AprendizadoAcimaDoPlano/>
      <TimeForaDaCurva/>
      <SejaautenticoSeExponha/>
      <RespeitoEInclusao/>
      <SomosGuardioes/>
      <CustomerLovers/>
    </div>
  );
}

export default App;
