import { useState } from "react";
import "./technology.css";
function Technology(props) {
  const [tech, setTech] = useState(props.technologyArray[0]);

  const changeLaunch = (event) => {
    if (event.target.textContent === "1") {
      setTech(props.technologyArray[0]);
    } else if (event.target.textContent === "2") {
      setTech(props.technologyArray[1]);
    } else if (event.target.textContent === "3") {
      setTech(props.technologyArray[2]);
    }
  };
  return (
    <div className="technology">
      <div className="tech_header">
        <span className="Condensed">03</span>
        <p className="Condensed tech_title">SPACE LAUNCH 101</p>
      </div>
      <img
        src={tech.images.landscape}
        width="100%"
        height="170"
        className="mobile"
        alt="moon"
      />
      <div className="tech_menu">
        <button onClick={changeLaunch} className={tech.id === 1? "clickedButton":"button"} >1</button>
        <button onClick={changeLaunch} className={tech.id === 2? "clickedButton":"button"} >2</button>
        <button onClick={changeLaunch} className={tech.id === 3? "clickedButton":"button"} >3</button>
      </div>
      <p className="termin Condensed">THE TERMINOLOGY…</p>
      <h1 className="name Bellefair">{tech.name}</h1>
      <p className="tech_paragraph Barlow">{tech.description}</p>
    </div>
  );
}

export default Technology;
