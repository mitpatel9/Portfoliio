/*eslint-disable */
import  "./Navbar.css";
import { Link } from "react-scroll";

const Navbar = () => {
 
  return (
    <div className="navbar" id="nav">
      <div className="container">
        <div className="left">
          <h2 className="logotital">Immitpatel</h2>
        </div>
        <div className="right">
          <ul className="ulright">
            <li className="liright" ><Link to="nav" spy={true} smooth={true} offset={-3000} duration={100} >Home</Link> </li>
            <li className="liright"><Link to="about" spy={true} smooth={true} offset={300} duration={100} >About</Link></li>
            <li className="liright"><Link to="skill" spy={true} smooth={true} offset={-40} duration={100} >Skills</Link></li>
            <li className="liright"><Link to="project" spy={true} smooth={true} offset={-40} duration={100} >Projects</Link> </li>
            <li className="liright"><Link to="contact" spy={true} smooth={true} offset={100} duration={100} >Contact</Link> </li>
            <li className="liright"><a href="https://drive.google.com/file/d/19EGW0EZnv6O_mMIrx8SQmA6byoYungSU/view?usp=sharing" target="_blank">Resume</a> </li>
          </ul>
        </div>
      </div>
    </div>

  );
};

export default Navbar;
