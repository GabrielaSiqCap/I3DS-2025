import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import './App.css'

import { BrowserRouter, Route, Routes } from "react-router";

import Header from "./components/header/Header";


import Sobre from "./pages/Sobre";
import Home from "./pages/Home";
import NaoEncontrado from "./pages/NaoEncontrado";
import Contato from "./pages/Contato";

function App() {

  return (
    <>
    <BrowserRouter>
    <Header />

    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/sobre" element={<Sobre/>} />
      <Route path="/contato" element={<Contato/>} />
      <Route path="*" element={<NaoEncontrado/>} />
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
