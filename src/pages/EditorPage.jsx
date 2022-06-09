import React, { useState, useRef } from "react";
import Client from "../components/Client";
import Editor from "../components/Editor";

const EditorPage = () => {
  const socketRef = useRef(null);
  useEffect(() => {
    const init = async () => {
      socketRef.current = await initSocket();
    };
    init();
  }, []);

  const [clients, setClients] = useState([
    { socketId: 1, username: "Barun" },
    { socketId: 2, username: "Debnath" },
  ]);
  return (
    <div className="mainWrap">
      <div className="aside">
        <div className="asideInner">
          <div className="logo">
            <img src="/code-sync.png" alt="log" className="logoImage" />
          </div>
          <h3>Connected</h3>
          <div className="clientsList">
            {clients.map((client) => (
              <Client key={client.socketId} username={client.username} />
            ))}
          </div>
        </div>
        <button className="btn copyBtn">Copy ROOM ID</button>
        <button className="btn leaveBtn">Leave</button>
      </div>
      <div className="editorWrap">
        <Editor />
      </div>
    </div>
  );
};

export default EditorPage;
