/*eslint-disable */
import "./GetInTouch.css";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";
import InstagramIcon from "@mui/icons-material/Instagram";
import CallIcon from "@mui/icons-material/Call";

const GetInTouch = () => {
  return (
    <div className="getintouch" id="contact">
      <h1 className="getintouchheding">
        Get In<span>Touch</span>
      </h1>
      <div className="getintouchicon">
        <a href="https://www.linkedin.com/in/mit-patel-16b40b253" target="_blank" ><LinkedInIcon className="gettouchicon" /></a>
        <a href="https://github.com/mitpatel9" target="_blank" ><GitHubIcon className="gettouchicon" /></a>
        <a href="mailto:patelmit2014@gmail.com" target="_blank" ><EmailIcon className="gettouchicon" /></a>
        <a href="https://www.instagram.com/mitpatel_11/" target="_blank" ><InstagramIcon className="gettouchicon" /></a>
        <a href="tel:+919601052291" target="_blank" ><CallIcon className="gettouchicon" /></a>
      </div>
    </div>
  );
};

export default GetInTouch;
