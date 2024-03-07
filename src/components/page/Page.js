import './Page.css'
import Nav from '../nav/Nav'
import Header from '../header/Header'
import List from '../list-film/List-film'
import Footer from '../footer/Footer'

import Accueil from '../accueil/Accueil'

function Page() {
  return (
    <div className="wrapper">
      <Nav />
      <Header />
      <Accueil />
      <h2>Bonjour utilisateur à partir de Page</h2>
      <List />
      <Footer />
    </div>
  );
}

export default Page