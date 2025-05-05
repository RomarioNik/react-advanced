import { useState } from "react";
import { data } from "../../../data";

const UserChallenge = () => {
  const [name, setName] = useState("");
  const [people, setPeople] = useState(data);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name) return;

    const newArray = [...people, { id: people.length + 1, name: name }];
    setPeople(newArray);
    setName("");
  };

  const deletePerson = (id) => {
    setPeople(people.filter((person) => person.id !== id));
  };

  return (
    <div>
      <form className="form" onSubmit={handleSubmit}>
        <h4>Add User</h4>
        <div className="form-row">
          <label htmlFor="name" className="form-label">
            name
          </label>
          <input
            type="text"
            className="form-input"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <button type="submit" className="btn btn-block">
          submit
        </button>
      </form>

      {people?.length > 0 && (
        <ul style={{ width: "100%" }}>
          {people.map(({ id, name }) => (
            <li key={id} style={{ width: "200px" }}>
              <div style={{ display: "flex", gap: "20px" }}>
                <p>{name}</p>
                <button
                  type="button"
                  className="btn"
                  onClick={() => deletePerson(id)}
                >
                  x
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
export default UserChallenge;
