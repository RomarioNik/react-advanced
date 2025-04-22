import { useState } from "react";

const UseStateObject = () => {
  const [person, setPerson] = useState({
    name: "Peter",
    age: 24,
    hobby: "read books",
  });

  const { name, age, hobby } = person;

  const displayPerson = () => {
    setPerson({ name: "John", age: 35, hobby: "Tennis" });
  };

  return (
    <div>
      <p>{name}</p>
      <p>{age}</p>
      <p>Enjoys: {hobby}</p>
      <button className="btn" type="button" onClick={displayPerson}>
        Show John
      </button>
    </div>
  );
};

export default UseStateObject;
