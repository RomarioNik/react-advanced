import { useState } from "react";

const ToggleChallenge = () => {
  const [isPresent, setPresent] = useState(false);

  return (
    <div>
      <h3>toggle challenge</h3>
      <button
        className="btn"
        type="button"
        onClick={() => setPresent(!isPresent)}
        style={{ width: "100%", maxWidth: "5rem" }}
      >
        {isPresent ? "hide" : "show"}
      </button>
      {isPresent && (
        <div
          style={{
            borderRadius: "1rem",
            backgroundColor: "lightgray",
            margin: "1rem",
            padding: "1rem",
          }}
        >
          <p>My name is Vasa</p>
          <p>I live in Ireland</p>
        </div>
      )}
    </div>
  );
};

export default ToggleChallenge;
