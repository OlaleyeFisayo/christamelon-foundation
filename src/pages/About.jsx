import { useContext } from "react";
import EventSection from "../components/EventSection";
import "./About.scss";
import { myContent } from "../context/context";
import PopUp from "../components/PopUp";
import aboutPageImage from "../assets/svg/aboutPageImage.svg";
import SupportersSection from "../components/SupportersSection";

export default function About() {
  const { popUp } = useContext(myContent);

  return (
    <>
      {popUp && <PopUp />}
      <section className="about">
        <section id="header">
          <div className="header-content">
            <div className="header-left">
              <div className="header-title">
                <div className="line"></div>
                <h1>Know About Us</h1>
              </div>
              <h1>We are a non-governmental Organization</h1>
            </div>
            <div className="header-right">
              <h1>
                Empowering Women and Promoting Equality: Our Mission at
                Christamelon Foundation
              </h1>
              <p>
                At Christamelon Foundation, we are committed to promoting
                women's rights and creating a world where women have equal
                opportunities to men in all spheres of life. We believe that
                every woman has the right to be treated with dignity and
                respect, and to live free from discrimination and violence.Our
                foundation works tirelessly to empower women by providing them
                with access to education, healthcare, and economic
                opportunities. We also advocate for policy changes that promote
                gender equality and fight against gender-based violence.
              </p>
            </div>
          </div>

          <div className="img-content">
            <img src={aboutPageImage} alt="aboutPageImage" />
          </div>

          <div className="missionandVision-content">
            <div>
              <h3>Our Mission</h3>
              <h1>
                We make sure to provide inclusive care for children with special
                needs
              </h1>
              <p>
                We are dedicated to ensuring that every child, including those
                with special needs, receives the care and support they deserve.
                We believe that every child has the right to be included and
                valued, regardless of their abilities.
              </p>
            </div>
            <div>
              <h3>Our Vision</h3>
              <h1> Empowering Women: A Foundation for Change</h1>
              <p>
                we are dedicated to advocating for the rights of women and
                ensuring gender equality. We believe that women have the right
                to live free from discrimination, violence, and inequality, and
                we work tirelessly to empower them to achieve their full
                potential.
              </p>
            </div>
          </div>
        </section>
        <SupportersSection color="#e7f2f7" />
        <EventSection />
        <section id="awards">
          <div className="award-content"></div>
        </section>
      </section>
    </>
  );
}
