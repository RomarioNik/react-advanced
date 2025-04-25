import { useEffect, useState } from "react";

const CleanupFunction = () => {
  const [value, setValue] = useState(false);
  console.log("render");

  const toggle = () => {
    setValue(!value);
  };

  return (
    <div>
      <button className="btn" type="button" onClick={toggle}>
        toggle
      </button>

      <div>
        <div>{value && <SecondComponent />}</div>
      </div>
    </div>
  );
};

export const SecondComponent = () => {
  useEffect(() => {
    const intervalId = setInterval(() => {
      console.log("SecondComponent");
    }, 1000);

    return () => {
      clearInterval(intervalId);
      console.log("unmount");
    };
  }, []);

  return (
    <div>
      <p>SecondComponent</p>
    </div>
  );
};

export default CleanupFunction;
