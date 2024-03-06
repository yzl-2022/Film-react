import './Nav.css';

function Nav() {
  return (
    <nav className="wrapper">
        <ul>
            <li><a href="#">CONNEXION</a></li>
            <li><a href="#">INSCRIPTION</a></li>
            <li><a href="#">CONTACTEZ-NOUS</a></li>
            <li><a href="#"><img src="/icons/language.svg" alt="language"/><span className="active">FR</span></a></li>
        </ul>
    </nav>
  );
}

export default Nav