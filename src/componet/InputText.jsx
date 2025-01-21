import React from "react";
import { useState } from "react";

function InputText() {
  const [textInput, setTextInput] = useState("");

  function handleChange(e) {
    setTextInput(e.target.value);
  }
  return (
    <>
      <div className="input">
        <input type="text" value={textInput} onChange={handleChange} />
        <div>
          <h3>{textInput}</h3>
        </div>
      </div>
      <hr />
    </>
  );
}

export default InputText;
