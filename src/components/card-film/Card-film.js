import './Card-film.css';

function Card(props) {
  return (
    <a href="#">
        <div className="pic"><img src={`/img/${props.film.titreVignette}`} alt={`image pour ${props.film.titre}`}/></div>
        <div className="txt">
            <h3>{props.film.titre}</h3>
            <p className="description">{props.film.description}</p>
            <p><span>Année </span> {props.film.annee}</p>
            <p><span>Réalisation </span> {props.film.realisation}</p>
        </div>
    </a>
  );
}

export default Card