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
      <Link to="/music">music</Link>
      <Link to="/fashion">fashion</Link>
      <Link to="/homedecor">home decor</Link>
    </div>
    </>
  );
}

export default Header;
