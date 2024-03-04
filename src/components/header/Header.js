import './Header.css';

function Header() {
  return (
    <header class="wrapper">
        <div class="logo">
            <h1><a href="/">Accueil</a></h1>
        </div>
        <div class="headerNav">
            <ul>
                <li><a href="#">Films</a></li>
                <li><a href="#">Admin</a></li>
            </ul>
        </div>
        <div class="headerSearch">
            <input type="text" placeholder="search"/>
            <a href="#"></a>
        </div>
        <div class="notification">
            <a href="#"></a>
            <div class="number">5</div>
        </div>
    </header>
  );
}

export default Header