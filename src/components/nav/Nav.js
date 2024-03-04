import './Nav.css';

function Nav() {
  return (
    <nav class="wrapper">
        <ul>
            <li><a href="#">CONNEXION</a></li>
            <li><a href="#">INSCRIPTION</a></li>
            <li><a href="#">CONTACTEZ-NOUS</a></li>
            <li><a href="#"><span class="active">FR</span></a></li>
        </ul>
    </nav>
  );
}

export default Nav