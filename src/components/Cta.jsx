import { Link } from "react-router-dom";
import "./Cta.scss";
import { useContext } from "react";
import { myContent } from "../context/context";

export default function Cta() {
  const { showPopUp } = useContext(myContent);
  return (
    <div className="cta">
      <h1>
        You can contribute to provide a place for children with special needs!
      </h1>
      <div className="buttons">
        <button onClick={showPopUp}>Join as a volunteer</button>
        <Link to="donation">Donate</Link>
      </div>
    </div>
  );
}
