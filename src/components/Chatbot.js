import { useState, useEffect, useRef } from "react";
import "../styles/Chatbot.css";
import { saveAs } from "file-saver";
import { Document, Packer, Paragraph, TextRun } from "docx";
import { FiClipboard, FiSave, FiFileText } from "react-icons/fi";


export default function Chatbot() {
  const [messages, setMessages] = useState([
    { sender: "bot", text: "Hello! Describe the test procedure you'd like to run." },
  ]);
  const [input, setInput] = useState("");
  const messagesEndRef = useRef(null);

  const [showDialog, setShowDialog] = useState(false);
  const [dialogMessage, setDialogMessage] = useState("");


  // Scroll to bottom when messages update
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim()) return;

    // Add user message
    const userMessage = { sender: "user", text: input };
    setMessages((msgs) => [...msgs, userMessage]);
    setInput("");

    // Call API and get bot response
    try {
      const response = await fetch(" http://127.0.0.1:5000/api/chatbot", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: input }),
      });
      const data = await response.json();

      // Add bot response message
      setMessages((msgs) => [...msgs, { sender: "bot", text: data.reply }]);
    } catch (error) {
      setMessages((msgs) => [
        ...msgs,
        { sender: "bot", text: "Sorry, something went wrong." },
      ]);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSend();
    }
  };

  const copyText = (text) => {
    navigator.clipboard.writeText(text).then(() => {
      setDialogMessage("Copied to clipboard!");
      setShowDialog(true);
    });
  };

  const saveAsJSON = (text, index) => {
    const blob = new Blob([JSON.stringify({ response: text }, null, 2)], {
      type: "application/json",
    });
    saveAs(blob, `chatbot-response-${index + 1}.json`);
  };

  const saveAsDocx = async (text, index) => {
    const doc = new Document({
      sections: [
        {
          children: [new Paragraph({ children: [new TextRun(text)] })],
        },
      ],
    });

    const blob = await Packer.toBlob(doc);
    saveAs(blob, `chatbot-response-${index + 1}.docx`);
  };


  return (
    <div className="chatbot-container">
      <div className="chat-window">
        {messages.map((msg, i) => (
          <div
            key={i}
            className={`chat-message ${msg.sender === "user" ? "user" : "bot"}`}
          >

            <div className="msg-text">{msg.text}</div>
            {msg.sender === "bot" &&
              msg.text !== "Hello! Describe the test procedure you'd like to run." &&
              msg.text !== "Sorry, something went wrong." && (
                <div className="chat-actions">
                  <button
                    onClick={() => copyText(msg.text)}
                    aria-label="Copy text"
                    title="Copy"
                  >
                    <FiClipboard size={16} />
                  </button>
                  <button
                    onClick={() => saveAsJSON(msg.text, i)}
                    aria-label="Save as JSON"
                    title="Save as JSON"
                  >
                    <FiSave size={16} />
                  </button>
                  <button
                    onClick={() => saveAsDocx(msg.text, i)}
                    aria-label="Save as DOCX"
                    title="Save as DOCX"
                  >
                    <FiFileText size={16} />
                  </button>
                </div>
              )}

          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>
      <div className="input-area">
        <input
          type="text"
          placeholder="Type your message..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyPress}
        />
        <button onClick={handleSend}>Send</button>
      </div>
      {showDialog && (
        <div className="modal-overlay">
          <div className="modal-box">
            <p>{dialogMessage}</p>
            <button onClick={() => setShowDialog(false)}>OK</button>
          </div>
        </div>
      )}
    </div>
  );
}
