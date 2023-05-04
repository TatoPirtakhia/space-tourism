import { useState } from "react";
import "./crew.css";

function Crew(props) {
  props.crewArray.sort((a, b) => a.id - b.id);
  const [crew, setCrew] = useState(props.crewArray[0]);
  const changeCrew = (event) => {
    if (event.target.id === "1") {
      setCrew(props.crewArray[0]);
    } else if (event.target.id === "2") {
      setCrew(props.crewArray[1]);
    } else if (event.target.id === "3") {
      setCrew(props.crewArray[2]);
    } else if (event.target.id === "4") {
      setCrew(props.crewArray[3]);
    }
  };
  return (
    <div className="crew">
      <div className="crew_header">
        <span className="Condensed">02</span>
        <p className="Condensed crew_title">Meet your crew</p>
      </div>
      <img src={crew.images.webp} height={222} className="mobile" alt="moon" />
      <div className="conainter">
        <div className="crew_menu">
          <div
            onClick={changeCrew}
            className={crew.id === 1 ? "clickedCircle" : "circle"}
            id="1"
          ></div>
          <div
            onClick={changeCrew}
            className={crew.id === 2 ? "clickedCircle" : "circle"}
            id="2"
          ></div>
          <div
            onClick={changeCrew}
            className={crew.id === 3 ? "clickedCircle" : "circle"}
            id="3"
          ></div>
          <div
            onClick={changeCrew}
            className={crew.id === 4 ? "clickedCircle" : "circle"}
            id="4"
          ></div>
        </div>
        <div className="info">
          <p className="Bellefair role ">{crew.role}</p>
          <h1 className="Bellefair name">{crew.name}</h1>
          <p className="crew_paragraph Barlow">{crew.bio}</p>
        </div>
      </div>
      <img src={crew.images.webp} height={572}  className="crew_tablet" alt="moon" />
    </div>
  );
}

export default Crew;
