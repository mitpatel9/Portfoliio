/*eslint-disable */
import "./About.css";
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import CallIcon from '@mui/icons-material/Call';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import ArticleIcon from '@mui/icons-material/Article';
import FacebookIcon from '@mui/icons-material/Facebook';
import PublicIcon from '@mui/icons-material/Public';

const About = () => {
  return (
    <div className="about" id="about">
      <div className="aboutcontainer">
        <div className="section1">
            <h1 className="hedingtital">Hi, I am Mit Patel</h1>
        </div>
        <div className="section2">
            <h1 className="typewriter">
            A Full Stack Web Developer
            </h1>
        </div>
        <div className="section3">
            <p className="heddingabout">A Full Stack Developer who loves solving problems and building projects. I am equipped with a <br /> variety of technologies and tools to help me build the best possible product.</p>
        </div>
        <div className="section4">
            <a href="https://github.com/mitpatel9" target="_blank" className="abouta" ><GitHubIcon/></a>
            <a href="mailto:patelmit2014@gmail.com" target="_blank" className="abouta" ><EmailIcon/></a>
            <a href="tel:+919601052291" target="_blank" className="abouta" ><CallIcon/></a>
            <a href="https://www.linkedin.com/in/mit-patel-16b40b253" target="_blank" className="abouta" ><LinkedInIcon/></a>
            <a href="" className="abouta"><ArticleIcon/></a>
            <a href="https://www.facebook.com/profile.php?id=100007143510269" target="_blank" className="abouta" ><FacebookIcon/></a>
            <a href="https://goo.gl/maps/hMVecLiyEXJrwSGU8" target="_blank" className="abouta" ><PublicIcon/></a>
        </div>
      </div>
    </div>
  );
};

export default About;
