import { useState, useEffect } from "react";

const url = "https://api.github.com/users";

const FetchData = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // const people = fetch(url)
    //   .then((resp) => resp.json())
    //   .then((data) => setUsers(data))
    //   .catch((err) => console.log(err));
    // const fetchData = async () => {
    //   try {
    //     const resp = await fetch(url);
    //     const data = await resp.json();
    //     setUsers(data);
    //   } catch (error) {
    //     console.log(error);
    //   }
    // };
    // fetchData();
  }, []);

  return (
    <ul style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr" }}>
      {users.length > 0 &&
        users.map((user) => (
          <li
            key={user.id}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "1rem",
              padding: "1rem",
            }}
          >
            <img
              src={user.avatar_url}
              alt={user.login}
              style={{ width: "75px" }}
            />
            <p>{user.login}</p>
          </li>
        ))}
    </ul>
  );
};
export default FetchData;
