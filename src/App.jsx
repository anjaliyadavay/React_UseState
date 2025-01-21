import "./App.css";
import Counter from "./componet/Counter";
import InputText from "./componet/InputText";
import Toggle from "./componet/Toggle";
import MultState from "./componet/MultState";
import Form from "./componet/Form"

function App() {
  return (
    <>
      <h1>
        <u style={{color: "rgb(112 92 240)"}}>Text Input</u>
      </h1>
      <InputText />

      <h1>
        <u style={{color: "rgb(112 92 240)"}}>Counter</u>
      </h1>
      <Counter />

      <h1>
        <u style={{color: "rgb(112 92 240)"}}>Toggle</u>
      </h1>
      <Toggle />

      <h1>
        <u style={{color: "rgb(112 92 240)"}}>Managing Multiple States in One Component</u>
      </h1>
      <MultState/>


      <h1>
        <u style={{color: "rgb(112 92 240)"}}>Contact Us</u>
      </h1>
      <Form/>
    </>
  );
}

export default App;
