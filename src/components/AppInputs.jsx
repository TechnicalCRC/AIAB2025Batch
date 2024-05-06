import { useState } from "react";

function AppInputs() {
  //  let showText = 'My static text';
  let [showText, setShowText] = useState("My static text");

  let handleOnChange = () => {
    setShowText(event.target.value);
    console.log(event.target.value);
  };
  return (
    <div>
      <div className="row my-row">
        <div className="col-6">
          <input
            type="text"
            placeholder="Enter todo here"
            onChange={() => handleOnChange()}
          />
        </div>
        <div className="col-4">
          <input type="date" />
        </div>
        <div className="col-2">
          <button className="btn btn-success my-button">Add</button>
        </div>
        <p> {showText}</p>
      </div>
    </div>
  );
}

export default AppInputs;
