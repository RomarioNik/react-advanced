import { useState } from "react";

const UserChallenge = () => {
  const [user, setUser] = useState(null);

  const login = () => {
    if (!user) {
      setUser({ name: "Garry", surname: "Black" });
      return;
    }

    setUser(null);
  };

  // const logout = () => {
  // };

  return (
    <div>
      <h2>user challenge</h2>

      <p>Hello, {user ? `there ${user.name}` : "please logIn"}</p>
      <button className="btn" type="button" onClick={login}>
        {user ? "LogOut" : "LogIn"}
      </button>
    </div>
  );
};

export default UserChallenge;
