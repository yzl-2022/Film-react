import Accueil from './components/accueil/Accueil'

import { BrowserRouter, Routes, Route } from "react-router-dom"
import router from './router/Router'

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
