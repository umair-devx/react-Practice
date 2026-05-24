import React from "react";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">OLX</div>

      <div className="search">
        <input type="text" placeholder="Search items, cars, mobiles..." />
      </div>

      <div className="nav-links">
        <span>Login</span>
        <button>+ SELL</button>
      </div>
    </nav>
  );
}

export default Navbar;