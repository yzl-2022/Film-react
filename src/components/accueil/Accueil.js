import './Accueil.css';
import message from './Accueil.json'

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
      <section className='msg'>
        {message.map( (p, index)=> <p key={index}>{p}</p>)}
      </section>
    </div>
  );
}

export default Accueil