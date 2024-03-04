import './Accueil.css';
import Nav from '../nav/Nav'
import Header from '../header/Header'
import List from '../list-film/List-film'
import Footer from '../footer/Footer'

function Accueil() {
  return (
    <div className="Accueil">
      <Nav />
      <Header />
      <h2>Bonjour utilisateur</h2>
      <List />
      <Footer />
    </div>
  );
}

export default Accueil