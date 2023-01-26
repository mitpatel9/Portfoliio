import "./Aboutme.css";
import logoimg from "./../asset/1.png";
import InputIcon from "@mui/icons-material/Input";

const Aboutme = () => {
  return (
    <div className="aboutme">
      <h1 className="hedingh1">
        About<span>Me</span>
      </h1>
      <div className="aboutmecontainer">
        <div className="leftaboutme">
          <img src={logoimg} alt="" className="logoimage" />
        </div>
        <div className="right">
          <div className="sec1">
            <h3>
              Hi Everyone, I am Mit Patel from Singa, Gujarat. I have completed{" "}
              <br />
              my graduation in Master of Science from SMT S M Panchal Science{" "}
              <br />
              College, Talod.
            </h3>
          </div>
          <div className="sec2">
            <h2 className="interest">Some of my interests :</h2>
          </div>
          <div className="sec3">
            <div className="intresticon">
              <InputIcon  className="icon"/>
              <span>Coding</span>
            </div>
            <div className="intresticon">
              <InputIcon className="icon" />
              <span>Reading Books</span>
            </div>
            <div className="intresticon">
              <InputIcon className="icon"/>
              <span>Play Game Online</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aboutme;
