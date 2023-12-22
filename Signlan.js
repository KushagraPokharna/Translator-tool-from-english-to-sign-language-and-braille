import React, { useState } from "react";
import "./Sign.css";
import axios from "axios";

const Signlan = () => {
  const [inputText, setInputText] = useState("");
  const [signLanguage, setSignLanguage] = useState([]);
  const toSign = async () => {
    try {
      const response = await axios.post(
        "https://translator-server.onrender.com/tosign",
        {
          text: inputText,
        }
      );
      setSignLanguage(response.data);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <>
      <div class="formbox">
        <div class="titlebox">ENGLISH TO ISL</div>
        <form class="formstyle">
          <input
            type="text"
            name="name"
            onChange={(e) => setInputText(e.target.value)}
            class="inputstyle"
            placeholder="Enter text here......"
            autoComplete="off"
          />
        </form>
        <div className="bigbox">
          <div onClick={toSign} className="transstyle">
            TRANSLATE
          </div>
          <form
            action="https://v2.convertapi.com/convert/pdf/to/txt?Secret=SS16irzXTEkL87SB&download=attachment"
            method="post"
            enctype="multipart/form-data"
          >
            <div className="inputstyl">
              <input type="file" name="File" />
              <input
                type="submit"
                value="Convert file"
                style={{ fontWeight: "bold", color: "black" }}
              />
            </div>
          </form>
        </div>
        <div>
          <div class="imgbox">
            {signLanguage.map((item, index) => (
              <div key={index} class="signbox">
                <img src={item} class="imgstyle" alt="" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Signlan;
