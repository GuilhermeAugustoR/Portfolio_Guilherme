import React from "react";
import "./styles.css";
import { IoCheckmarkDoneSharp } from "react-icons/io5";

const Experience = () => {
  return (
    <section id="experience">
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>

      <div className="container experience_container">
        <div className="experience_frontend">
          <h3>Frontend Development</h3>
          <div className="experience_content">
            <article className="experience_details">
              <IoCheckmarkDoneSharp className="experience_details-icon" />
              <div>
                <h4>HTML</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>

            <article className="experience_details">
              <IoCheckmarkDoneSharp className="experience_details-icon" />
              <div>
                <h4>CSS</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>

            <article className="experience_details">
              <IoCheckmarkDoneSharp className="experience_details-icon" />
              <div>
                <h4>JavaScript</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>

            <article className="experience_details">
              <IoCheckmarkDoneSharp className="experience_details-icon" />
              <div>
                <h4>TypeScript</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>

            <article className="experience_details">
              <IoCheckmarkDoneSharp className="experience_details-icon" />
              <div>
                <h4>Styled Components</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>

            <article className="experience_details">
              <IoCheckmarkDoneSharp className="experience_details-icon" />
              <div>
                <h4>React</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>

            <article className="experience_details">
              <IoCheckmarkDoneSharp className="experience_details-icon" />
              <div>
                <h4>React Native</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>

            <article className="experience_details">
              <IoCheckmarkDoneSharp className="experience_details-icon" />
              <div>
                <h4>Next</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
          </div>
        </div>

        <div className="experience_backend">
          <h3>Backend Development</h3>
          <div className="experience_content">
            <article className="experience_details">
              <IoCheckmarkDoneSharp className="experience_details-icon" />
              <div>
                <h4>NodeJs</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>

            <article className="experience_details">
              <IoCheckmarkDoneSharp className="experience_details-icon" />
              <div>
                <h4>MySQL</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
