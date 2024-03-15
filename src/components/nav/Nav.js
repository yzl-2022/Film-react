import './Nav.css';

function Nav(props) {
  return (
    <nav className="wrapper">
        <ul>
            <li>
              <form onSubmit={props.handleLogin}>
                <input type="email" name='username' placeholder='email' value="123@123.com" />
                <input type="password" name='password' placeholder='mot de passe' value="123456789" />
                <input type="submit" value="CONNEXION" />
              </form>
            </li>
            <li><a href="#"><img src="/icons/language.svg" alt="language"/><span className="active">FR</span></a></li>
        </ul>
    </nav>
  );
}

export default Nav