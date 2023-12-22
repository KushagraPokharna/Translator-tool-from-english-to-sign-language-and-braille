import "./App.css";
import React, { useState } from "react";
import axios from "axios";

const Braille = () => {
  const [inputText, setInputText] = useState("");
  const [brailleLanguage, setbrailleLanguage] = useState("");
  const toBraille = async () => {
    try {
      const response = await axios.post(
        "https://translator-server.onrender.com/tobraille",
        {
          text: inputText,
        }
      );
      setbrailleLanguage(response.data);
      console.log(brailleLanguage);
    } catch (error) {
      console.error(error);
    }
  };

  //Function to convert the english text extracted to braille language
  const toBrailleLong = async () => {
    try {
      const response = await axios.post(
        "https://translator-server.onrender.com/tobraille",
        {
          text: inputText,
        }
      );
      saveTextToFile(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  //Function to save the sample text to a text file
  const saveTextToFile = (data) => {
    const textToSave = data;
    const blob = new Blob([textToSave], { type: "text/plain" });
    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = "textFile.txt";
    a.style.display = "none";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };
  return (
    <>
      <div class="braillebox">
        <div class="fbox">
          <div class="titlebox">ENGLISH TO BRAILLE</div>
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
          <div className="brabox">{brailleLanguage}</div>
        </div>
        <div className="bigbox">
          <div onClick={toBraille} className="boxstyle">
            TRANSLATE
          </div>
          <form
            action="https://v2.convertapi.com/convert/pdf/to/txt?Secret=SS16irzXTEkL87SB&download=attachment"
            method="post"
            enctype="multipart/form-data"
          >
            <div className="inputstyl">
              <input type="file" name="File" />
              <input type="submit" value="Convert file" />
            </div>
          </form>
          <div
            onClick={() => {
              toBrailleLong();
            }}
            className="boxstyle"
          >
            DOWNLOAD TEXT
          </div>
        </div>
      </div>
    </>
  );
};

export default Braille;

// App.js
