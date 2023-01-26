import './App.css';
import Navbar from './componant/navbar/Navbar';
import About from './componant/about/About';
import Aboutme from './componant/aboutme/Aboutme';
import GetInTouch from './componant/getintouch/GetInTouch';
import Footer from './componant/footer/Footer';
import Skill from './componant/skill/Skill';
import Project from './componant/project/Project';
import Scroll from './componant/scrollpage/Scroll';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <About/>
      <Aboutme/>
      <Skill/>
      <Project/>
      <GetInTouch/>
      <Footer/>
      <Scroll/>
    </div>
  );
}

export default App;
