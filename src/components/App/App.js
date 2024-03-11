import './App.css'

import Header from '../header/Header'
import Nav from '../nav/Nav'
import Footer from '../footer/Footer'

import Accueil from '../accueil/Accueil'
import List from '../list-film/List-film'
import Film from '../film/Film'
import Admin from '../admin/Admin'
import NotFound from '../notFound/NotFound'

import { BrowserRouter, Routes, Route } from "react-router-dom"

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Header />
      <Routes>
          <Route path="/" >
            <Route index element={<Accueil />} />
            <Route path="/films" element={<List />} />
            <Route path="/film/:id" element={<Film />} />
            <Route path="/admin" element={<Admin />} />
          </Route>
          <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
