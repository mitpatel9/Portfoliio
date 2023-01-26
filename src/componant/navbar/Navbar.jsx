
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
            <li className="liright" ><Link to="nav" spy={true} smooth={true} offset={-3000} duration={500} >Home</Link> </li>
            <li className="liright"><Link to="about" spy={true} smooth={true} offset={300} duration={500} >About</Link></li>
            <li className="liright"><Link to="skill" spy={true} smooth={true} offset={-40} duration={500} >Skills</Link></li>
            <li className="liright"><Link to="project" spy={true} smooth={true} offset={-40} duration={500} >Projects</Link> </li>
            <li className="liright"><Link to="contact" spy={true} smooth={true} offset={100} duration={500} >Contact</Link> </li>
            <li className="liright"><a href="">Resume</a> </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
