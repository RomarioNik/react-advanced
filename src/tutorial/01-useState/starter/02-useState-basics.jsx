import { useState } from "react";

const UseStateBasics = () => {
  const [count, setCount] = useState(0);

  const handleButtonClick = () => {
    setCount(count + 1);
  };

  return (
    <>
      <h3>{count}</h3>
      <button className="btn" type="button" onClick={handleButtonClick}>
        Increase
      </button>
    </>
  );
};

export default UseStateBasics;
