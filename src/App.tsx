import React from "react";
import "./App.css";
import { Button } from "./stories/button/Button";
import { Tags } from "./stories/tags/Tags";

function App() {
  return (
    <div className="App">
      <Button
        primary={true}
        label="register"
        size="large"
        backgroundColor="red"
      />
      <Tags label="This Is Mine" backgroundColor="pink" />
    </div>
  );
}

export default App;
