import './App.css';
import './App.css';
import { Route, useParams, Routes } from 'react-router-dom';


function App() {
  const VerificarRuta = () => {
    const { palabraONumero } = useParams();
    return isNaN(palabraONumero) ? <h1>La palabra es {palabraONumero}</h1> : <h1>El número es {palabraONumero}</h1>;
  }

  const ColorPalabraFondo = () => {
    const { palabra, color, fondo } = useParams();
    return (
      <h1 style={{ color: color, backgroundColor: fondo }}>
        La palabra es {palabra}
      </h1>
    );
  }


  return (
    <div className="App">
      <h1>Enrutamiento con React Router</h1>
      <Routes>
        <Route path="/home" element={<h1>Bienvenido</h1>} />
        <Route path="/:palabraONumero" element={<VerificarRuta />} />
        <Route path="/:palabra/:color/:fondo" element={<ColorPalabraFondo />} />
      </Routes>
    </div>
  );
}

export default App;
