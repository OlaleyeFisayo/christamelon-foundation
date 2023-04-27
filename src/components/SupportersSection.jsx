import "./SupportersSection.scss";
import logoOne from "../assets/svg/logo1.svg";
import logoTwo from "../assets/svg/logo2.svg";
import logoThree from "../assets/svg/logo3.svg";
import logoFour from "../assets/svg/logo4.svg";
import logoFive from "../assets/svg/logo5.svg";
import logoSix from "../assets/svg/logo6.svg";

export default function SupportersSection({ color }) {
  const styles = {
    background: color,
  };

  return (
    <section id="supporters" style={styles}>
      <div className="supporters-content">
        <h1>our Supporters</h1>
        <div className="line"></div>
        <div className="logos">
            <img src={logoOne} alt="logo1" />
            <img src={logoTwo} alt="logo2" />
            <img src={logoThree} alt="logo3" />
            <img src={logoFour} alt="logo4" />
            <img src={logoFive} alt="logo5" />
            <img src={logoSix} alt="logo6" />
        </div>
      </div>
    </section>
  );
}
