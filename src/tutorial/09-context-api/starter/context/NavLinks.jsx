import { UserContainer } from "./UserContainer";

export const NavLinks = () => {
  return (
    <div className="nav-container">
      <ul className="nav-links">
        <li>
          <a href="#">home</a>
        </li>
        <li>
          <a href="#">about</a>
        </li>
      </ul>

      <UserContainer />
    </div>
  );
};
