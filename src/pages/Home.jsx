import { Link } from "react-router-dom";
import "./Home.scss";
import aboutImg from "../assets/svg/about-img.svg";
import serviceImg from "../assets/svg/services-img.svg";
import advocacyImg from "../assets/svg/advocacy.svg";
import healthBenefitImg from "../assets/svg/healthBenefit.svg";
import livelihoodImg from "../assets/svg/livelihoods.svg";
import scholarshipImg from "../assets/svg/scholarships.svg";
import SupportersSection from "../components/SupportersSection";
import ProjectList from "../components/ProjectList";
import chartImg from "../assets/svg/chart.svg";
import EventSection from "../components/EventSection";
import PopUp from "../components/PopUp";
import { useContext } from "react";
import { myContent } from "../context/context";

export default function Home() {
  const { popUp } = useContext(myContent);

  return (
    <>
      {popUp && <PopUp />}
      <section className="home">
        <section id="header">
          <div className="header-content">
            <h1>
              Inclusive care for girls with special needs in all of Zimbabwe
            </h1>
            <a href="#whatwedo">What we do</a>
            <div className="statistics">
              <p>230 children under our care</p>
              <div className="line"></div>
              <p>58 donations collected</p>
            </div>
          </div>
        </section>

        <section id="about">
          <div className="about-content">
            <div className="text-side">
              <div className="about-title">
                <div className="line"></div>
                <h1>Know about us</h1>
              </div>
              <h1>
                We provide empowerment, support and care to the girl child
              </h1>
              <p>
                It is a foundation to support and care for the girl child also
                Advocating for laws that are fair they should be made to enforce
                respect and protection for girls. We work to prevent social ills
                against girls - eg prostitution, child abuse, rape, early
                marriage, drug addiction, and all forms of discrimination.
              </p>
              <Link to="about">Learn more</Link>
            </div>
            <div className="img-side">
              <img src={aboutImg} alt="about img" />
            </div>
          </div>
        </section>

        <SupportersSection color={"#FFFFFF"} />

        <section id="whatwedo">
          <div className="whatwedo-content">
            <div className="text-side">
              <div className="whatwedo-title">
                <div className="line"></div>
                <h1>what we do</h1>
              </div>
              <h1>Some services we provide for our girls</h1>
              <p>
                The foundation for Women rape victims is dedicated to providing
                support and services to women who have experienced sexual
                assault. With a mission to empower survivors and help them
                reclaim their lives, the foundation offers a wide range of
                services and programs aimed at addressing the many challenges
                faced by women in the aftermath of rape.
              </p>
              <div className="functions">
                <div className="function">
                  <img src={advocacyImg} alt="advocacy" />
                  <div className="text">
                    <h1 className="function-name">Advocacy</h1>
                    <p className="function-description">
                      the foundation works to raise awareness about the issue of
                      rape and sexual assault and to promote policies and laws
                      that protect survivors and hold perpetrators accountable
                      for their actions.
                    </p>
                  </div>
                </div>

                <div className="function">
                  <img src={healthBenefitImg} alt="health benefit" />
                  <div className="text">
                    <h1 className="function-name">Health benefits</h1>
                    <p className="function-description">
                      The foundation ensures that survivors have access to
                      high-quality care and support throughout their recovery.
                    </p>
                  </div>
                </div>

                <div className="function">
                  <img src={scholarshipImg} alt="Scholarships" />
                  <div className="text">
                    <h1 className="function-name">Scholarships</h1>
                    <p className="function-description">
                      The foundation helps them build a brighter future for
                      themselves and their families.
                    </p>
                  </div>
                </div>

                <div className="function">
                  <img src={livelihoodImg} alt="Sustainable livelihoods" />
                  <div className="text">
                    <h1 className="function-name">Sustainable livelihoods</h1>
                    <p className="function-description">
                      Survivors can create a sustainable source of income that
                      can support themselves and their family.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="img-side">
              <img src={serviceImg} alt="services image" />
            </div>
          </div>
        </section>

        <section id="projects">
          <div className="projects-content">
            <div className="projects-title">
              <div className="line"></div>
              <h1>Projects we have done</h1>
            </div>
            <h1 className="h1">
              We are all about creating a place where girls can thrive
            </h1>
            <ProjectList />
          </div>
        </section>

        <section id="statistics">
          <div className="statistics-content">
            <div className="text-side">
              <h1>How we spend your donations and where it goes</h1>
              <p>
                We understand that when you make a donation, you want to know
                exactly where your money is going and we pledge to be
                transparent.
              </p>
              <div className="stats-row">
                <div className="stat">
                  <div className="square mint"></div>
                  <span>40% child care home</span>
                </div>
                <div className="stat">
                  <div className="square purple"></div>
                  <span>35% cleanliness program</span>
                </div>
                <div className="stat">
                  <div className="square orange"></div>
                  <span>10% helping people</span>
                </div>
                <div className="stat">
                  <div className="square yellow"></div>
                  <span>10% excursions</span>
                </div>
                <div className="stat">
                  <div className="square pink"></div>
                  <span>5% feeding the poor</span>
                </div>
              </div>
            </div>
            <div className="img-side">
              <img src={chartImg} alt="chart" />
            </div>
          </div>
        </section>

        <EventSection />
      </section>
    </>
  );
}
