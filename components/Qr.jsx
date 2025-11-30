import React, { useState } from "react";
import {QRCodeCanvas} from "qrcode.react"
import "./Qr.css"

const Qr = () => {
  const [text, setText] = useState("");
  const [inputVal, setInputVal] = useState("")
  return (
    <div className="qr_wrapper">
      <div className="qr_container">
        <div className="qr_container_head_div">
          <h1 className="qr_container_head">QR code Generator</h1>
        </div>
        <div className="qr_container_input_div">
          <input
            type="text"
            className="qr_container_input"
            placeholder="Enter your Name or UPI"
            value={inputVal}
            // onChange={e=>e.target.value}
            onChange={(e) => setInputVal(e.target.value)}
          />
          <button className="qr_create_btn" onClick={() => setText(inputVal)}>Create</button>
        </div>
        <div className="qr_container_qr_code_div">
            {text && <QRCodeCanvas value={text} className="qr_code" />} 
        </div>
      </div>
    </div>
  );
};

export default Qr;
