import { useEffect, useState } from "react";

const url = "https://api.github.com/users/QuincyLarson";

const MultipleReturnsFetchData = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsError(false);
        const resp = await fetch(url);

        if (!resp.ok) {
          setIsError(true);
          setIsLoading(false);
          return;
        }

        const user = await resp.json();
        setUser(user);
      } catch (error) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };

    // fetchData();
  }, []);

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  if (isError) {
    return <h2>Error...</h2>;
  }

  return (
    <div>
      <h2>Fetch Data </h2>
      <img src={user.avatar_url} alt={user.name} style={{ width: "100px" }} />
      <p>{user.name}</p>
      <p>{user.company}</p>
    </div>
  );
};

export default MultipleReturnsFetchData;
