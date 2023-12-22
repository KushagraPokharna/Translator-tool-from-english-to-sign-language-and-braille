import { useNavigate } from "react-router-dom";
import "./Home.css";

const Home = () => {
  const navigate = useNavigate();
  const tosign = () => {
    navigate("/sign");
  };
  const tobraille = () => {
    navigate("/braille");
  };

  return (
    <>
      <div class="homepg">
        <div class="tbox">SIGNATOR</div>
        <div class="content">
          India's first app for English to ISL translation
        </div>
        <div onClick={tosign} class="btn1">
          SIGN LANGUAGE TRANSLATOR
        </div>

        <div onClick={tobraille} class="btn2">
          BRAILLE TRANSLATOR
        </div>
      </div>
    </>
  );
};

export default Home;
