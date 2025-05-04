import { NavBar } from "./NavBar";
import { AboutPage, HomePage } from "./Pages";

import { Example } from "./Example/index.jsx";

const EntryPoint = () => {
  return (
    <div>
      <NavBar />
      <AboutPage />
      <HomePage />
      <Example />
    </div>
  );
};

export default EntryPoint;
