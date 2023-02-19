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
      <Link to="#">artists</Link>
      <Link to="#">fashion</Link>
    </div>
    </>
  );
}

export default Header;
