import { Link } from "react-router-dom";
import "./home.css";
function Home(props) {
  return (
    <div className="home">
      <h2 className="Condensed home_header">SO, YOU WANT TO TRAVEL TO</h2>
      <h1 className="Bellefair title">SPACE</h1>
      <p className="Barlow paragraph">
        Let’s face it; if you want to go to space, you might as well genuinely
        go to outer space and not hover kind of on the edge of it. Well sit
        back, and relax because we’ll give you a truly out of this world
        experience!
      </p>
      <Link to='/destination' onClick={props.clickDestination} ><button className="Bellefair ">EXPLORE</button></Link>
    </div>
  );
}

export default Home;
