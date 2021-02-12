import React, { useState } from "react";
import { Button } from "@material-ui/core";
import "./App.css";

function App() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);

  console.log(messages);

  const sendMessage = (e) => {
    e.preventDefault();
    setMessages([...messages, input]);
    setInput("");
  };

  return (
    <div className="App">
      <h1>Hallo</h1>

      <form>
        <input value={input} onChange={(e) => setInput(e.target.value)} />
        <Button
          disabled={!input}
          variant="contained"
          color="primary"
          type="submit"
          onClick={sendMessage}
        >
          Send Messages
        </Button>
      </form>

      {messages.map((message, idx) => (
        <p key={idx}>{message}</p>
      ))}
    </div>
  );
}

export default App;
