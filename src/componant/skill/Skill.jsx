import "./Skill.css";
import js from './../asset/icons8-javascript-logo-100.png'
import html from "./../asset/icons8-html-96.png"
import css from "./../asset/icons8-css3-100.png"
import react from "./../asset/icons8-react-80.png"
import node from "./../asset/icons8-node-js-96.png"
import mongodb from "./../asset/icons8-mongodb-a-cross-platform-document-oriented-database-program-96.png"
import Materialui from "./../asset/icons8-material-ui-96.png"
import exprees from "./../asset/icons8-express-js-100.png"
import bootstrap from "./../asset/icons8-bootstrap-96.png"
import tailwindcss from "./../asset/icons8-tailwindcss-96.png"
import netify from "./../asset/icons8-netlify-a-cloud-computing-company-that-offers-hosting-and-serverless-backend-services-for-static-websites.-96.png"
import github from "./../asset/icons8-github-90.png"


const Skill = () => {
  return (
    <div className="skill" id="skill">
      <h1 className="skillheding">Skill</h1>
      <div className="skilltop">
        <div className="skillbox">
            <img src={js} alt="" className="iconimg"/>
          <span>JavaScript</span>
        </div>
        <div className="skillbox">
            <img src={html} alt="" className="iconimg"/>
          <span>Html</span>
        </div>
        <div className="skillbox">
        <img src={css} alt="" className="iconimg"/>
          <span>Css</span>
        </div>
        <div className="skillbox">
        <img src={react} alt="" className="iconimg"/>
          <span>React</span>
        </div>
        <div className="skillbox">
        <img src={node} alt="" className="iconimg"/>
          <span>Node Js</span>
        </div>
        <div className="skillbox">
        <img src={mongodb} alt="" className="iconimg"/>
          <span>MongoDb</span>
        </div>
      </div>
      <div className="skillbottom">
      <div className="skillbox">
      <img src={exprees} alt="" className="iconimg"/>
          <span>Express</span>
        </div>
        <div className="skillbox">
        <img src={Materialui} alt="" className="iconimg"/>
          <span>Material Ui</span>
        </div>
        <div className="skillbox">
        <img src={bootstrap} alt="" className="iconimg"/>
          <span>Bootstrap</span>
        </div>
        <div className="skillbox">
        <img src={tailwindcss} alt="" className="iconimg"/>
          <span>Tailwind CSS</span>
        </div>
        <div className="skillbox">
        <img src={netify} alt="" className="iconimg"/>
          <span>Netlify</span>
        </div>
        <div className="skillbox">
        <img src={github} alt="" className="iconimg"/>
          <span>Github</span>
        </div>
      </div>
    </div>
  );
};

export default Skill;
