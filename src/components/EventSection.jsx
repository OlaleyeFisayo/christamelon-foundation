import "./EventSection.scss";
import Cta from "./Cta";
import { Link } from "react-router-dom";
import arrow from "../assets/svg/arrow.svg";

export default function EventSection({onClick}) {
  return (
    <section id="event">
      <div className="event-content">
        <Cta 
          onClick={onClick}
        />
        <div className="events">
          <div className="events-title">
            <h1>Our Events</h1>
            <div className="line"></div>
          </div>

          <div className="events-list">
            <div className="event">
              <div className="date">
                <span>13</span>
                <span>apr</span>
              </div>
              <div className="event-title">
                <h1>Next events</h1>
                <p>A day with our wonderful children </p>
              </div>
              <Link to="event">
                <img src={arrow} alt="arrow" />
              </Link>
            </div>
            <div className="event">
              <div className="date">
                <span>25</span>
                <span>apr</span>
              </div>
              <div className="event-title">
                <h1>Next events</h1>
                <p>Seminar: Caring for children with autism</p>
              </div>
              <Link to="event">
                <img src={arrow} alt="arrow" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
