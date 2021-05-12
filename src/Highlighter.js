import React, { useState } from "react";

function Highlighter(props) {
  const [color, setColor] = useState("");
  function highlightPurple() {
    setColor(color === props.color ? "purple" : "red");
  }

  return (
    <span className={color} onClick={highlightPurple}>
      {props.word}
    </span>
  );
}

export default Highlighter;
