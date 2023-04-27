import { Link } from "react-router-dom";
import "./ProjectList.scss";

export default function ProjectList() {
  return (
    <div className="projects-list">
      <div className="project">
        <h1>Mission smile 1k: Outdoor charity</h1>
        <p>
          The project aims to bring joy and happiness to underprivileged women
          and children by organizing weekly excursions to outdoor locations.
        </p>
        <Link to="projects">Learn More</Link>
      </div>
      <div className="project">
        <h1>Weekly excursions</h1>
        <p>
          We believes that such outings can have a positive impact on mental
          health and well-being.
        </p>
        <Link to="projects">Learn More</Link>
      </div>
      <div className="project">
        <h1>Monthly public awareness</h1>
        <p>
          We hopes to create a sense of community and foster social connections
          among the participants through these outings.
        </p>
        <Link to="projects">Learn More</Link>
      </div>
    </div>
  );
}
