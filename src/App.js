import React from "react";

import Highlighter from "./Highlighter";

function App() {
  return (
    <p>
      Some text with a <Highlighter word="highlighted" color="red" /> word
    </p>
  );
}

export default App;
