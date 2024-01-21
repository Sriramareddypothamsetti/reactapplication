import "./Navbar.css";
import React, { useContext } from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import SearchIcon from "@mui/icons-material/Search";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import { UserContext } from "./Cartnum";
import { useEffect } from "react";
function Navbar() {
  const { cartitems, increment } = useContext(UserContext);

  // Log count to verify
  return (
    <div className="container">
      <div className="child1">
        <h1>
          <Link to="/" className="nav-link">
            SHOPPIT
          </Link>
        </h1>
      </div>
      <div className="child4">
        <div>
          <Link to="/men" className="nav-link">
            MEN
          </Link>
        </div>
        <div>
          <Link to="/women" className="nav-link">
            WOMEN
          </Link>
        </div>
        <div>
          <Link to="/kid" className="nav-link">
            KIDS
          </Link>
        </div>
      </div>
      <div className="child2 ">
        <input type="text" />
        <Button type="submit">
          <SearchIcon />
        </Button>
      </div>
      <div className="child3">
        <div className="cartt">
          <div className="bol">{cartitems.length}</div>
          <div className="bol1">
            <Link to="/cart" className="nav-link">
              <ShoppingCartIcon style={{ fontSize: "2em" }} />
            </Link>
          </div>
        </div>
        <div className="acco">
          <AccountCircleIcon style={{ fontSize: "2em" }} />
        </div>
      </div>
    </div>
  );
}
export default Navbar;
