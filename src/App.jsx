import StarterErrorOne from "./tutorial/01-useState/starter/01-error-example";
import UseStateBasic from "./tutorial/01-useState/starter/02-useState-basics";
import UseStateArray from "./tutorial/01-useState/starter/03-useState-array";
import UseStateObject from "./tutorial/01-useState/starter/04-useState-object";
import UseStateGotcha from "./tutorial/01-useState/starter/05-useState-gotcha";
import UseEffectExample from "./tutorial/02-useEffect/starter/01-code-example";
import UseEffectBasics from "./tutorial/02-useEffect/starter/02-useEffect-basics";
import UseEffectMultiple from "./tutorial/02-useEffect/starter/03-multiple-effects";
import UseEffectFetch from "./tutorial/02-useEffect/starter/04-fetch-data";
import UseEffectCleanUp from "./tutorial/02-useEffect/starter/05-cleanup-function";
import CondRenderMultReturnsBase from "./tutorial/03-conditional-rendering/starter/01-multiple-returns-basics";
import CondRenderMultReturnsFetch from "./tutorial/03-conditional-rendering/starter/02-multiple-returns-fetch-data";
import CondRenderHooksRule from "./tutorial/03-conditional-rendering/starter/03-hooks-rule";
import CondRenderShortCircuitOverview from "./tutorial/03-conditional-rendering/starter/04-short-circuit-overview";
import CondRenderShortCircuitExamples from "./tutorial/03-conditional-rendering/starter/05-short-circuit-examples";
import CondRenderShortCircuitToggle from "./tutorial/03-conditional-rendering/starter/06-toggle-challenge";
import CondRenderShortCircuitUser from "./tutorial/03-conditional-rendering/starter/07-user-challenge";
import ProjectStructure from "./tutorial/04-project-structure/starter/EntryPoint";
import LeverageJavaScript from "./tutorial/05-leverage-javascript/starter/LeverageJavaScript";
import FormsControlledInput from "./tutorial/06-forms/starter/01-controlled-inputs";
import FormsUserChallenge from "./tutorial/06-forms/starter/02-user-challenge";
import FormsMultipleInputs from "./tutorial/06-forms/starter/03-multiple-inputs";
import FormsOtherInputs from "./tutorial/06-forms/starter/04-other-inputs";
import FormsFormData from "./tutorial/06-forms/starter/05-form-data";
import UseRefBasics from "./tutorial/07-useRef/starter/01-useRef-basics";
import CustomHooks from "./tutorial/08-custom-hooks/starter/01-toggle";
import CustomHooksFetchData from "./tutorial/08-custom-hooks/starter/02-fetch-data";
import PropDrilling from "./tutorial/09-context-api/starter/prop-drilling/Navbar";
import ContextAPI from "./tutorial/09-context-api/starter/context/Navbar";
import { Line } from "./Line";

function App() {
  return (
    <div className="container">
      <h2>Advanced React</h2>
      <Line />
      <h4 style={{ color: "orange" }}>Context API</h4>
      <PropDrilling />
      <ContextAPI />

      <Line />
      <h4 style={{ color: "orange" }}>Custom Hooks Fetch Data</h4>
      <CustomHooksFetchData />

      <Line />
      <h4 style={{ color: "orange" }}>Custom Hooks</h4>
      <CustomHooks />

      <Line />
      <h4 style={{ color: "orange" }}>UseRef Basics</h4>
      <UseRefBasics />

      {/* <Line />
      <h4 style={{ color: "orange" }}>Forms Form Data</h4>
      <FormsFormData /> */}

      {/* <Line />
      <h4 style={{ color: "orange" }}>Forms Other Inputs</h4>
      <FormsOtherInputs /> */}

      {/* <Line />
      <h4 style={{ color: "orange" }}>Forms Multiple Inputs</h4>
      <FormsMultipleInputs /> */}

      {/* <Line />
      <h4 style={{ color: "orange" }}>Forms User Challenge</h4>
      <FormsUserChallenge /> */}

      {/* <Line />
      <h4 style={{ color: "orange" }}>Forms Controlled Input</h4>
      <FormsControlledInput /> */}

      <Line />
      <h4 style={{ color: "orange" }}>Leverage JavaScript</h4>
      <LeverageJavaScript />

      <Line />
      <h4 style={{ color: "orange" }}>Project Structure</h4>
      <ProjectStructure />

      <Line />
      <h4 style={{ color: "orange" }}>Cond render short circuit overview</h4>
      <CondRenderShortCircuitUser />

      <Line />
      <h4 style={{ color: "orange" }}>Cond render short circuit overview</h4>
      <CondRenderShortCircuitToggle />

      <Line />
      <h4 style={{ color: "orange" }}>Cond render short circuit overview</h4>
      <CondRenderShortCircuitExamples />

      <Line />
      <h4 style={{ color: "orange" }}>Cond render short circuit overview</h4>
      <CondRenderShortCircuitOverview />

      <Line />
      <h4 style={{ color: "orange" }}>Cond render hooks rule</h4>
      <CondRenderHooksRule />

      <Line />
      <h4 style={{ color: "orange" }}>Cond render mult returns fetch</h4>
      <CondRenderMultReturnsFetch />

      <Line />
      <h4 style={{ color: "orange" }}>Cond render mult returns base</h4>
      <CondRenderMultReturnsBase />

      <Line />
      <h4 style={{ color: "orange" }}>useEffect CleanUp</h4>
      <UseEffectCleanUp />

      <Line />
      <h4 style={{ color: "orange" }}>useEffect Fetch</h4>
      <UseEffectFetch />

      <Line />
      <h4 style={{ color: "orange" }}>useEffect Multiple</h4>
      <UseEffectMultiple />

      <Line />
      <h4 style={{ color: "orange" }}>useEffect Basics</h4>
      <UseEffectBasics />

      <Line />
      <h4 style={{ color: "orange" }}>useEffect Example</h4>
      <UseEffectExample />

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
