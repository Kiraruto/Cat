/** @format */

import { Link } from "react-router-dom";
import "./Home.css";
function Home(props) {
  return (
    <>
      <div className="div1">
        <h1 className="h1"> Gatos</h1>
        <Link to={`/Cat`}>
          <button className="btn1">Ver Gatos</button>
        </Link>
      </div>
    </>
  );
}

export default Home;
