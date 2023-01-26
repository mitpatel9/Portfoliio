import "./Scroll.css";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";

const Scroll = () => {
    const scrollup=()=>{
        window.scroll({
            top: 0,
            behavior: 'smooth'
        })
    }
  return (
    <div className="scroll">
      <div className="containerscroll">
        <ArrowUpwardIcon className="scrollarrow" onClick={scrollup}/>
      </div>
    </div>
  );
};

export default Scroll;
