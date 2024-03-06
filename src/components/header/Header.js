import './Header.css';

function Header() {
  return (
    <header className="wrapper">
        <div className="logo">
            <h1><a href="/">Accueil</a></h1>
        </div>
        <div className="headerNav">
            <ul>
                <li><a href="#">Films</a></li>
                <li><a href="#">Admin</a></li>
            </ul>
        </div>
        <div className="headerSearch">
            <input type="text" placeholder="search"/>
            <a href="#"></a>
        </div>
        <div className="notification">
            <a href="#"></a>
            <div className="number">5</div>
        </div>
    </header>
  );
}

export default Header