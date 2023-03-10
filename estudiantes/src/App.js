/* eslint-disable jsx-a11y/anchor-is-valid */
// import logo from './logo.svg';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { AgregarEstudiante, EditarEstudiante, ListaEstudiantes } from './estudiantes';
import { HomeScreen } from './screens.js/HomeScreen';


function App() {
  return (
    <div className="App">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <a className="navbar-brand" href="/">Inicio</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link" href="agregarestudiante">Administrador</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/listaestudiantes">Lista de estudiantes</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>


      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomeScreen />} exact ></Route>
          <Route path='/listaestudiantes' element={<ListaEstudiantes />} exact ></Route>
          <Route path='/agregarestudiante' element={<AgregarEstudiante />} exact></Route>
          <Route path='/editarestudiante/:idestudiante' element={<EditarEstudiante />} exact></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;


