import { Link } from "react-router-dom";

function NavHeaderComponent() {
  const baseUrl = process.env.REACT_APP_BASEURL;
  return (
    <>
      <div className="header__logo">
        <Link to={`${baseUrl}/`}>Aguud</Link>
      </div>
      <div className="header__nav">
        <Link to={`${baseUrl}/`}>Home</Link>
        <Link to={`${baseUrl}/about`}>About</Link>
        <Link to={`${baseUrl}/contact`}>Contact</Link>
        <Link to={`${baseUrl}/portfolio`}>Portfolio</Link>
      </div>
    </>
  );
}

export default NavHeaderComponent;
