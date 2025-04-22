import { useState } from "react";

const UseStateGotcha = () => {
  const [value, setValue] = useState(0);

  const increaseValue = () => {
    // setValue(value + 1);
    setValue((prevState) => {
      console.log("inside", value);
      return prevState + 1;
    });

    console.log("outside", value);
  };

  return (
    <div>
      <p>{value}</p>
      <button className="btn" type="button" onClick={increaseValue}>
        increase
      </button>
    </div>
  );
};

export default UseStateGotcha;
