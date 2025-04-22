import StarterErrorOne from "./tutorial/01-useState/starter/01-error-example";
import UseStateBasic from "./tutorial/01-useState/starter/02-useState-basics";
import UseStateArray from "./tutorial/01-useState/starter/03-useState-array";
import UseStateObject from "./tutorial/01-useState/starter/04-useState-object";
import UseStateGotcha from "./tutorial/01-useState/starter/05-useState-gotcha";
import { Line } from "./Line";

function App() {
  return (
    <div className="container">
      <h2>Advanced React</h2>
      <Line />
      <h4 style={{ color: "orange" }}>useState Gotcha</h4>
      <UseStateGotcha />

      <Line />
      <h4 style={{ color: "orange" }}>useState Object</h4>
      <UseStateObject />

      <Line />
      <h4 style={{ color: "orange" }}>useState Array</h4>
      <UseStateArray />

      <Line />
      <h4 style={{ color: "orange" }}>useState Basics </h4>
      <UseStateBasic />

      <Line />
      <h4 style={{ color: "orange" }}>About re-render</h4>
      <StarterErrorOne />
    </div>
  );
}

export default App;
