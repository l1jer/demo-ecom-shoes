import { Link, Outlet } from "react-router-dom";

import ShopLogo from "../../assets/logo.png";

import "./navigation.styles.scss";

const Navigation = () => {
  return (
    <>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <img className="logo" src={ShopLogo} alt="shop-logo" />
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            Shop
          </Link>
          <Link className="sign-in" to="/sign-in">
            Sign In
          </Link>
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Navigation;
