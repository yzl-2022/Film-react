import './Accueil.css';

function Accueil() {
  return (
    <div className='wrapper'>
      <section className="banner">
        <div className="picture">
            <a href="#"><img src="accueil/accueil.jpg" alt="banner"/></a>
        </div>
        <div className="bannertext">
            <h2>Partagez vos commentaires !</h2>
            <p>Un endroit idéal pour partager vos avis et commentaires sur ma collection de films.</p>
            <a href="#">EN SAVOIR PLUS</a>
        </div>
      </section>
      <section>
        <p>trois phrase</p>
      </section>
    </div>
  );
}

export default Accueil