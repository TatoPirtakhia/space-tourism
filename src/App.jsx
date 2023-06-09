import "./App.css";
import { Routes, Route, Link, Navigate, useNavigate } from "react-router-dom";
import Home from "./home/home";
import Destination from "./destination/destination";
import Crew from "./crew/crew";
import { useState } from "react";
import Technology from "./technology/technology";
import { getCrew, getDestination, getTechnology } from "./getData";
import { useEffect } from "react";
function App() {
  const [click, setClick] = useState(false);
  const [destination, setDestination] = useState(true);
  const [crew, setCrew] = useState(true);
  const [technology, setTechnology] = useState(true);

  const [destinationArry, setDestinationArry] = useState([]);
  const [crewArray, setCrewArray] = useState([]);
  const [technologyArray, setTechnologyArray] = useState([]);

  const [page,setPage] = useState('HOME')
  const clickHome = () =>{
    setPage('HOME')
  }
  const clickDestination = async () => {
    setPage('DESTINATION');
    if (destination) {
      setDestinationArry(await getDestination());
      setDestination(false);
    }
  };

  const navigate = useNavigate();
  useEffect(() => {
    setPage('HOME');
    navigate("/home");
  }, []);

  const clickCrew = async () => {
    setPage('CREW');
    if (crew) {
      setCrewArray(await getCrew());
      setCrew(false);
    }
  };

  const clickTechnology = async () => {
    setPage('TECHNOLOGY');
    if (technology) {
      setTechnologyArray(await getTechnology());
      setTechnology(false);
    }
  };

  const clicked = () => {
    setClick(!click);
  };
  const clickNav = (event) => {
    if (event.target.className !== "right") {
      setClick(!click);
    }
  };
  
 
  return (
    <div className="body">
      <header>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="logo"
          width="48"
          height="48"
        >
          <g fill="none" fillRule="evenodd">
            <circle cx="24" cy="24" r="24" fill="#FFF" />
            <path
              fill="#0B0D17"
              d="M24 0c0 16-8 24-24 24 15.718.114 23.718 8.114 24 24 0-16 8-24 24-24-16 0-24-8-24-24z"
            />
          </g>
        </svg>  
        <div className="desktop_line"></div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={click ? "disabled" : "hamburger mobile"}
          onClick={clicked}
          width="24"
          height="21"
        >
          <g fill="#D0D6F9" fillRule="evenodd">
            <path d="M0 0h24v3H0zM0 9h24v3H0zM0 18h24v3H0z" />
          </g>
        </svg>
        <div className="tablet">
          <Link to="/home" onClick={clickHome} className={page === "HOME"?"clickedLink Condensed":"Link Condensed HOME"}>
            <apan className='desktop_span Condensed'>00</apan> HOME
          </Link>

          <Link
            to="/destination"
            onClick={clickDestination}
            className={page ==="DESTINATION" ?"clickedLink Condensed":"Link Condensed DESTINATION"}
          >
            <apan className='desktop_span Condensed'>01</apan>DESTINATION
          </Link>

          <Link to="/crew" onClick={clickCrew} className={page === "CREW" ?"clickedLink Condensed":"Link Condensed CREW"}>
          <apan className='desktop_span Condensed'>02</apan> CREW
          </Link>

          <Link
            to="/technology"
            onClick={clickTechnology}
            className={page === "TECHNOLOGY" ?"clickedLink Condensed":"Link Condensed TECHNOLOGY"}
          >
            <apan className='desktop_span Condensed'>03</apan>TECHNOLOGY
          </Link>
        </div>
      </header>
      <nav className={click ? "active" : "disabled"} onClick={clickNav}>
        <div className="right">
          <div className="iconClose">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              onClick={clicked}
              width="20"
              height="21"
            >
              <g fill="#D0D6F9" fillRule="evenodd">
                <path d="M2.575.954l16.97 16.97-2.12 2.122L.455 3.076z" />
                <path d="M.454 17.925L17.424.955l2.122 2.12-16.97 16.97z" />
              </g>
            </svg>
          </div>
          <div className="routes">
            <span>
              00
              <Link to="/home" className="Link Condensed HOME">
                HOME
              </Link>
            </span>
            <span>
              01
              <Link
                to="/destination"
                onClick={clickDestination}
                className="Link Condensed DESTINATION"
              >
                DESTINATION
              </Link>
            </span>
            <span>
              02
              <Link
                to="/crew"
                onClick={clickCrew}
                className="Link Condensed CREW"
              >
                CREW
              </Link>
            </span>
            <span>
              03
              <Link
                to="/technology"
                onClick={clickTechnology}
                className="Link Condensed TECHNOLOGY"
              >
                TECHNOLOGY
              </Link>
            </span>
          </div>
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />

        <Route
          path="/home"
          element={<Home clickDestination={clickDestination} />}
        />
        {destinationArry.length > 0 ? (
          <Route
            path="/destination"
            element={<Destination destinationArry={destinationArry} />}
          />
        ) : (
          ""
        )}

        {crewArray.length > 0 ? (
          <Route path="/crew" element={<Crew crewArray={crewArray} />} />
        ) : (
          ""
        )}

        {technologyArray.length > 0 ? (
          <Route
            path="/technology"
            element={<Technology technologyArray={technologyArray} />}
          />
        ) : (
          ""
        )}
      </Routes>
    </div>
  );
}

export default App;
