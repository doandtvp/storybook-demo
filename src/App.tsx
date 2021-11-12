import React from "react";
import "./App.css";
import { Button } from "./stories/button/Button";

function App() {
  return (
    <div className="App">
      <Button
        primary={false}
        label="register"
        size="large"
        backgroundColor="blue"
      />
    </div>
  );
}

export default App;
