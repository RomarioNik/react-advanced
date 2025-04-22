import { useState } from "react";
import { people } from "../../../data";

const UseStateArray = () => {
  const [person, setPerson] = useState(people);

  const handleButtonClear = () => {
    setPerson([]);
  };

  const handleButtonDelete = (id) => {
    const newPeople = person.filter((item) => item.id !== id);
    setPerson(newPeople);
  };

  return (
    <ul>
      <button className="btn" type="button" onClick={handleButtonClear}>
        Clear list
      </button>

      {person.length > 0 &&
        person.map(({ id, name, nickName, images }) => (
          <li key={id} style={{ border: "1px solid grey", margin: "0.2rem" }}>
            <p>Name: {name}</p>
            <p>NickName: {nickName}</p>
            {images?.map(({ small: { url } }) => (
              <img style={{ width: "5rem" }} src={url} key={url} />
            ))}

            <button
              className="btn"
              type="button"
              onClick={() => handleButtonDelete(id)}
            >
              Delete this person
            </button>
          </li>
        ))}
    </ul>
  );
};

export default UseStateArray;
