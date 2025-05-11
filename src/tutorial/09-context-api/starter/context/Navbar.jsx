import { useState } from "react";
import { NavLinks } from "./NavLinks";
import { AppContext } from "./useAppContext";

const Navbar = () => {
  const [user, setUser] = useState({ name: "bob" });

  const logout = () => {
    setUser(null);
  };

  return (
    <AppContext value={{ user, logout }}>
      <nav className="navbar">
        <h5>CONTEXT API</h5>
        <NavLinks />
      </nav>
    </AppContext>
  );
};

export default Navbar;
