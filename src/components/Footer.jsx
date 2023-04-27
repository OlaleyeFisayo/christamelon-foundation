import { Link } from "react-router-dom";
import "./Footer.scss";

export default function Footer() {
  const onSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <footer>
      <div className="footer-content">
        <h1>Christamelon Foundation</h1>
        <div className="links">
          <ul>
            <li>
              <Link to=".">Home</Link>
            </li>
            <li>
              <Link to="about">About Us</Link>
            </li>
            <li>
              <Link to="media">Team</Link>
            </li>
            <li>
              <Link to="whatwedo">What we do</Link>
            </li>
            <li>
              <Link to="contact">Contact</Link>
            </li>
          </ul>
          <ul>
            <li>More</li>
            <li>
              <Link to="project">Projects</Link>
            </li>
            <li>
              <Link to="event">Events</Link>
            </li>
            <li>
              <Link to="donation">Donate</Link>
            </li>
            <li>Blog</li>
          </ul>
          <ul>
            <li>Connects</li>
            <li>Facebook</li>
            <li>Instagram</li>
            <li>Twitter</li>
            <li>Linkedin</li>
          </ul>
        </div>
        <form onSubmit={onSubmit}>
          <h1>Subscribe to get latest updates</h1>
          <div>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Your email"
            />
            <button type="submit">Subscribe</button>
          </div>
        </form>
      </div>
    </footer>
  );
}
