import { Link } from "react-router-dom";

function Header(props) {
  return (
    <>
    <nav className="header">
      <Link to="/">
        <div className="app-title"><p className="app-name">t h e L O O P</p></div>
      </Link>
    </nav>

    <div className="topnav">
      <Link to="/artist/:id">music</Link>
      <Link to="#">fashion</Link>
      <Link to="#">beauty</Link>
      <Link to="#">home stuff</Link>
    </div>
    </>
  );
}

export default Header;
