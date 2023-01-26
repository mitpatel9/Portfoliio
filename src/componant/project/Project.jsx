import "./Project.css";
import project1 from "./../asset/project1.png";
import project2 from "./../asset/project2.png";
import project3 from "./../asset/project3.png";
import project4 from "./../asset/project4.png";
import project5 from "./../asset/project5.png";
import project6 from "./../asset/project6.png";
import project7 from "./../asset/project7.png";
import html from "./../asset/icons8-html-96.png";
import python from "./../asset/python.png";
import css from "./../asset/icons8-css3-100.png";
import react from "./../asset/icons8-react-80.png";
import node from "./../asset/icons8-node-js-96.png";
import mongodb from "./../asset/icons8-mongodb-a-cross-platform-document-oriented-database-program-96.png";
import Materialui from "./../asset/icons8-material-ui-96.png";
import exprees from "./../asset/icons8-express-js-100.png";


const Project = () => {
  return (
    <div className="project" id="project">
      <h1 className="projecttital">Project</h1>
      <div className="projectcontainer">
        <div className="projectleft">
          <div className="leftcontainer">
            <img src={project1} alt="" className="hedingproject"/>
          </div>
        </div>
        {/* project 1 */}
        <div className="projectright">
          <h2 className="projectheding">Netflix</h2>
          <p>
            Built on react for front end and nodeJS on backend. <br /> It's a my
            own project completed executed in 5 days.
          </p>
          <div className="projecticon">
            <img src={html} alt="" className="projectimg" />
            <img src={css} alt="" className="projectimg" />
            <img src={react} alt="" className="projectimg" />
            <img src={node} alt="" className="projectimg" />
            <img src={exprees} alt="" className="projectimg" />
            <img src={mongodb} alt="" className="projectimg" />
            <img src={Materialui} alt="" className="projectimg" />
          </div>
          <div className="projectbtn">
           
          <a href="https://github.com/mitpatel9/Netflix-Ui" target="_blank"><button className="btnproject">View Code</button></a>
          </div>
        </div>
      </div>
 {/* project 2 */}
      <div className="projectcontainer">
        <div className="projectleft">
          <div className="leftcontainer">
            <img src={project2} alt="" className="hedingproject"/>
          </div>
        </div>
        <div className="projectright">
          <h2 className="projectheding">Google Keep</h2>
          <p>
            Built on react for front end and nodeJS on backend. <br /> It's a my
            own project completed executed in 3 days.
          </p>
          <div className="projecticon">
          <img src={html} alt="" className="projectimg" />
            <img src={css} alt="" className="projectimg" />
            <img src={react} alt="" className="projectimg" />
            <img src={node} alt="" className="projectimg" />
            <img src={exprees} alt="" className="projectimg" />
            <img src={mongodb} alt="" className="projectimg" />
            <img src={Materialui} alt="" className="projectimg" />
          </div>
          <div className="projectbtn">
            <a href="https://github.com/mitpatel9/Google-Keep" target="_blank"><button className="btnproject">View Code</button></a>
          </div>
        </div>
      </div>
 {/* project 3 */}
      <div className="projectcontainer">
        <div className="projectleft">
          <div className="leftcontainer">
            <img src={project3} alt="" className="hedingproject"/>
          </div>
        </div>
        <div className="projectright">
          <h2 className="projectheding">User feedBack Pin</h2>
          <p>
            Built on react for front end and nodeJS on backend. <br /> It's a my
            own project completed executed in 2 days.
          </p>
          <div className="projecticon">
          <img src={html} alt="" className="projectimg" />
            <img src={css} alt="" className="projectimg" />
            <img src={react} alt="" className="projectimg" />
            <img src={node} alt="" className="projectimg" />
            <img src={exprees} alt="" className="projectimg" />
            <img src={mongodb} alt="" className="projectimg" />
            <img src={Materialui} alt="" className="projectimg" />
          </div>
          <div className="projectbtn">
          <a href="https://github.com/mitpatel9/Travel-User-feedBack-Pin" target="_blank"><button className="btnproject">View Code</button></a>
          </div>
        </div>
      </div>
{/* project 4 */}
<div className="projectcontainer">
        <div className="projectleft">
          <div className="leftcontainer">
            <img src={project4} alt="" className="hedingproject"/>
          </div>
        </div>
        <div className="projectright">
          <h2 className="projectheding">Node Farm</h2>
          <p>
            Built on react for front end and nodeJS on backend. <br /> It's a my
            own project completed executed in 5 days.
          </p>
          <div className="projecticon">
          <img src={html} alt="" className="projectimg" />
          <img src={css} alt="" className="projectimg" />
            <img src={react} alt="" className="projectimg" />
            <img src={node} alt="" className="projectimg" />
            <img src={exprees} alt="" className="projectimg" />
            <img src={mongodb} alt="" className="projectimg" />
            <img src={Materialui} alt="" className="projectimg" />
          </div>
          <div className="projectbtn">
          <a href="https://github.com/mitpatel9/Node-Vagitable" target="_blank"><button className="btnproject">View Code</button></a>
          </div>
        </div>
      </div>
 
 {/* project 5 */}
<div className="projectcontainer">
        <div className="projectleft">
          <div className="leftcontainer">
            <img src={project5} alt="" className="hedingproject"/>
          </div>
        </div>
        <div className="projectright">
          <h2 className="projectheding">Admin Dashboard</h2>
          <p>
            Built on react for front end. <br /> It's a my
            own project completed executed in 4 days.
          </p>
          <div className="projecticon">
          <img src={html} alt="" className="projectimg" />
          <img src={css} alt="" className="projectimg" />
            <img src={react} alt="" className="projectimg" />
           
            <img src={Materialui} alt="" className="projectimg" />
          </div>
          <div className="projectbtn">
          <a href="https://github.com/mitpatel9/Admin-Dashboard-Using-React" target="_blank" ><button className="btnproject">View Code</button></a>
          </div>
        </div>
      </div>

      {/* project 6 */}
<div className="projectcontainer">
        <div className="projectleft">
          <div className="leftcontainer">
            <img src={project6} alt="" className="hedingproject"/>
          </div>
        </div>
        <div className="projectright">
          <h2 className="projectheding">Zometo</h2>
          <p>
            Built on react for front end. <br /> It's a my
            own project completed executed in 1 days.
          </p>
          <div className="projecticon">
          <img src={html} alt="" className="projectimg" />
          <img src={css} alt="" className="projectimg" />
            <img src={react} alt="" className="projectimg" />
            <img src={Materialui} alt="" className="projectimg" />
          </div>
          <div className="projectbtn">
            
          <a href="https://github.com/mitpatel9/Zometo-UI" target="_blank"><button className="btnproject">View Code</button></a>
          </div>
        </div>
      </div>

       {/* project 7 */}
<div className="projectcontainer">
        <div className="projectleft">
          <div className="leftcontainer">
            <img src={project7} alt="" className="hedingproject"/>
          </div>
        </div>
        <div className="projectright">
          <h2 className="projectheding">Covid19 App</h2>
          <p>
            Built on react for front end and Python on backend. <br /> It's a my
            own project completed executed in 1 days.
          </p>
          <div className="projecticon">
          <img src={html} alt="" className="projectimg" />
          <img src={css} alt="" className="projectimg" />
            <img src={react} alt="" className="projectimg" />
            <img src={Materialui} alt="" className="projectimg" />
            <img src={python} alt="" className="projectimg" />
          </div>
          <div className="projectbtn">
            
          <a href="https://github.com/mitpatel9/Covid19App-Django" target="_blank"><button className="btnproject">View Code</button></a>
          </div>
        </div>
      </div>




    </div>
  );
};

export default Project;
