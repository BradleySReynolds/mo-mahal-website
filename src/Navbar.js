import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="links">
        <Link className="link" to="/">
          Home
        </Link>
        <Link className="link" to="/forsale">
          For Sale
        </Link>
        <Link className="link" to="/sold">
          Sold
        </Link>
        <Link className="link" to="/contact">
          Contact
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
