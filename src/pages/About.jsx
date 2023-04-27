import { useContext } from "react";
import EventSection from "../components/EventSection";
import "./About.scss";
import { myContent } from "../context/context";
import PopUp from "../components/PopUp";

export default function About() {
  const { popUp } = useContext(myContent);

  return (
    <>
      {popUp && <PopUp />}
      <section className="about">
        <EventSection />
      </section>
    </>
  );
}
