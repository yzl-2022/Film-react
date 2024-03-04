import './App.css'
import Accueil from '../accueil/Accueil'

//$npm i -D react-router-dom
import { BrowserRouter, Routes, Route } from "react-router-dom"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Accueil />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
