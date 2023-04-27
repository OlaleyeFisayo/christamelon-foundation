import "./PopUp.scss";
import closeButton from "../assets/svg/closeButton.svg";
import { useContext } from "react";
import { myContent } from "../context/context";

export default function PopUp() {
  const { hidePopUp } = useContext(myContent);
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="popup">
      <div className="popup-content">
        <div className="closeButton" onClick={hidePopUp}>
          <img src={closeButton} alt="close button" />
        </div>
        <h1>Join as a volunteer</h1>
        <p>
          As a volunteer, you will have the opportunity to support women who
          face discrimination, violence, and inequality in their daily lives.
        </p>
        <form onSubmit={handleSubmit}>
          <div className="username">
            <div className="name">
              <label htmlFor="firstname">First Name</label>
              <input type="text" id="firstname" />
            </div>
            <div className="name">
              <label htmlFor="lastname">Last Name</label>
              <input type="text" id="lastname" />
            </div>
          </div>
          <div className="email">
            <label htmlFor="email">Email Id</label>
            <input type="email" id="email" />
          </div>
          <div className="message">
            <label htmlFor="message">Message</label>
            <textarea
              name="message"
              id="message"
              cols="30"
              rows="10"
              placeholder="Type your message"
            ></textarea>
          </div>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
  );
}
