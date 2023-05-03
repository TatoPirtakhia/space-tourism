import "./App.css";
import { Routes, Route, Link, Navigate } from "react-router-dom";
import Home from "./home/home";
import Destination from "./destination/destination";
import Crew from "./crew/crew";
import { useState } from "react";
import Technology from "./technology/technology";
function App() {
  const [click, setClick] = useState(false);
  const [destination,setDestination] = useState(false)
  const [crew,setCrew] = useState(false)
  const [technology,setTechnology] = useState(false)
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
          <g fill="none" fill-rule="evenodd">
            <circle cx="24" cy="24" r="24" fill="#FFF" />
            <path
              fill="#0B0D17"
              d="M24 0c0 16-8 24-24 24 15.718.114 23.718 8.114 24 24 0-16 8-24 24-24-16 0-24-8-24-24z"
            />
          </g>
        </svg>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={click ? "disabled" : "hamburger"}
          onClick={clicked}
          width="24"
          height="21"
        >
          <g fill="#D0D6F9" fill-rule="evenodd">
            <path d="M0 0h24v3H0zM0 9h24v3H0zM0 18h24v3H0z" />
          </g>
        </svg>
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
              <g fill="#D0D6F9" fill-rule="evenodd">
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
              <Link to="/destination" className="Link Condensed DESTINATION">
                DESTINATION
              </Link>
            </span>
            <span>
              02
              <Link to="/crew" className="Link Condensed CREW">
                CREW
              </Link>
            </span>
            <span>
              03
              <Link to="/technology" className="Link Condensed TECHNOLOGY">
                TECHNOLOGY 
              </Link>
            </span>
          </div>
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />

        <Route path="/home" element={<Home />} />
        <Route path="/destination" element={<Destination />} />
        <Route path="/crew" element={<Crew />} />
        <Route path="/technology" element={<Technology />} />
      </Routes>
    </div>
  );
}

export default App;
