import { useState } from "react";
import "./destination.css";

function Destination(props) {
  const [planet, setPlanet] = useState(props.destinationArry[0]);
  const changePlanet = (event) => {
    if (event.target.textContent === "MOON") {
      setPlanet(props.destinationArry[0]);
    } else if (event.target.textContent === "MARS") {
      setPlanet(props.destinationArry[1]);
    } else if (event.target.textContent === "EUROPA") {
      setPlanet(props.destinationArry[2]);
    } else if (event.target.textContent === "TITAN") {
      setPlanet(props.destinationArry[3]);
    }
  };
  return (
    <div className="destination">
      <div className="destination_header">
        <span className="Condensed">01</span>
        <p className="Condensed des_title">Pick your destination</p>
      </div>
      <img
        src={planet.images.webp}
        width={170}
        height={170}
        className="mobile"
        alt="moon"
      />
      <div className="menu">
        
        <p
          onClick={changePlanet}
          className={planet.name === "Moon" ? "clickedPlanet" : "planets"}
        >
          MOON
        </p>
        <p
          onClick={changePlanet}
          className={planet.name === "Mars" ? "clickedPlanet" : "planets"}
        >
          MARS
        </p>
        <p
          onClick={changePlanet}
          className={planet.name === "Europa" ? "clickedPlanet" : "planets"}
        >
          EUROPA
        </p>
        <p
          onClick={changePlanet}
          className={planet.name === "Titan" ? "clickedPlanet" : "planets"}
        >
          TITAN
        </p>
      </div>
      <h1 className="planetName Bellefair">{planet.name}</h1>
      <p className="destination_paragraph  Barlow">{planet.description}</p>
      <footer>
        <div className="footerdivs">
            <p className="text Condensed">AVG. DISTANCE</p>
            <p className="Bellefair numbers">{planet.distance}</p>
        </div>
        <div className="footerdivs">
            <p className="text  Condensed">Est. travel time</p>
            <p className="numbers  Bellefair">{planet.travel}</p>
        </div>
      </footer>
    </div>
  );
}

export default Destination;
