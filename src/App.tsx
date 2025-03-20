import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [messages, setMessages] = useState(["hi there",'hello']);

  useEffect(() => {
    const ws = new WebSocket("ws://localhost:8080");
    ws.onmessage = (event) => {
      setMessages((m) => [...m, event.data]);
    };
  }, []);

  return (
    <div>
      <div className="h-screen bg-black">
        <div className="h-[85vh] p-8">
          {messages.map((message) => (
            <div className="m-8">
              <span className="bg-white text-black rounded p-4">{message}</span>
            </div>
          ))}
        </div>
        <div className="w-full bg-white flex">
          <input type="text" className="flex-1 p-4" />
          <button className="bg-purple-600 text-white p-4">Send message</button>
        </div>
      </div>
    </div>
  );
}

export default App;
