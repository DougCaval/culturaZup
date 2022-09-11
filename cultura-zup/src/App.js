
import './App.css';
import ErreOndeNinguemErrou from './ErreOndeNinguemErrou';
import PropositoDecide from './PropositoDecide';
import SejaTransformador from './SejaTransformador';


function App() {
  return (
    <div className="App">
      <PropositoDecide/>
      <SejaTransformador/>
      <ErreOndeNinguemErrou/>
    </div>
  );
}

export default App;
