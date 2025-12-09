import React, { useEffect, useState } from "react";
import { QRCodeCanvas } from "qrcode.react";
import "./Qr.css";

const Qr = () => {
  const [inputVal, setInputVal] = useState("");
  const [text, setText] = useState("");
  const [history, setHistory] = useState([]);
  const [showHistory, setShowHistory] = useState(false);

  // Load history
  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("qrHistory"));
    if (saved) setHistory(saved);
  }, []);

  const handleCreate = () => {
    const trimmed = inputVal.trim();
    if (!trimmed) {
      alert("Please enter valid text");
      return;
    }
    setText(trimmed);
    setInputVal("");
  };

  const handleSave = () => {
    if (!text || history.includes(text)) return;
    const updated = [...history, text];
    setHistory(updated);
    localStorage.setItem("qrHistory", JSON.stringify(updated));
  };

  const downloadQR = () => {
    const canvas = document.querySelector("canvas");
    if (!canvas) return;
    const img = canvas.toDataURL("image/png");
    const link = document.createElement("a");
    link.href = img;
    link.download = "qr-code.png";
    link.click();
  };

  return (
    <div className="qr_wrapper">
      <div className="qr_container">
        <h1 className="title">✨ QR Code Generator ✨</h1>

        {/* INPUT */}
        <div className="input_box">
          <input
            type="text"
            placeholder="Text / URL / UPI"
            value={inputVal}
            onChange={(e) => setInputVal(e.target.value)}
          />
          <button className="create_btn" onClick={handleCreate}>
            Create
          </button>
        </div>

        {/* QR */}
        {text && (
          <div className="qr_box">
            <QRCodeCanvas
              value={text}
              size={220}
              bgColor="#ffffff"
              fgColor="#9333ea"
            />
          </div>
        )}

        {/* ACTIONS */}
        {text && (
          <div className="actions">
            <button onClick={handleSave}>💾 Save</button>
            <button onClick={downloadQR}>⬇ Download</button>
          </div>
        )}

        {/* HISTORY */}
        <button
          className="toggle_history"
          onClick={() => setShowHistory(!showHistory)}
        >
          {showHistory ? "Hide History" : "Show History"}
        </button>

        {showHistory && (
          <div className="history">
            {history.length === 0 ? (
              <p>No history yet</p>
            ) : (
              history.map((item, i) => (
                <div key={i} onClick={() => setText(item)}>
                  {item}
                </div>
              ))
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Qr;
