import { useGlobalContext } from "./useAppContext";

export const UserContainer = () => {
  const { user, logout } = useGlobalContext();

  return (
    <div className="user-container">
      {user ? (
        <>
          <p>Hello There, {user.name.toUpperCase()}</p>

          <button type="button" className="btn" onClick={logout}>
            logout
          </button>
        </>
      ) : (
        <p>Please Login</p>
      )}
    </div>
  );
};
