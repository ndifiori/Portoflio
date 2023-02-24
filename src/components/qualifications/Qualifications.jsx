import React, { useState } from 'react';
import "./qualifications.css";

const Qualifications = () => {

  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  }

  return (
    <section className="qualifications">
      <h2 className="section__title"> Qualifications</h2>
      <span className="section__subtitle"> My Personal Journey</span>

      <div div className="qualification__container container">
        <div className="qualification__tabs">
          <div className= {toggleState === 1 
            ? "qualification__button qualification__active button--flex" 
            : "qualification__button button-flex" }
            onClick={ () => toggleTab(1) }
            >
            <i className="uil uil-graduation-cap qualification__icon"></i> Education
          </div>

          <div className= {toggleState === 2 
            ? "qualification__button qualification__active button--flex" 
            : "qualification__button button-flex" }
            onClick={ () => toggleTab(2) }
            >
            <i className="uil uil-briefcase-alt qualification__icon"></i> Experience
          </div>

        </div>

        <div className="qualification__sections">
          <div className= {toggleState === 1 
            ? "qualification__content qualification__content-active" 
            : "qualification__content" }>
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title"> Web Design </h3>
                <span className="qualification__subtitle"> UC Davis </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"> 2022- Present </i>
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>

            </div>

            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>

              <div>
                <h3 className="qualification__title"> Art Director </h3>
                <span className="qualification__subtitle"> UC Davis </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"> 2022- Present </i>
                </div>
              </div>
            </div>

            <div className="qualification__data">
              <div>
                <h3 className="qualification__title"> Web Development </h3>
                <span className="qualification__subtitle"> UC Davis </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"> 2022- Present </i>
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>

            </div>

            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>

              <div>
                <h3 className="qualification__title"> UX Expert </h3>
                <span className="qualification__subtitle"> UC Davis </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"> 2022- Present </i>
                </div>
              </div>
            </div>
          </div>

          <div className= {toggleState === 2 
            ?"qualification__content qualification__content-active"
            :"qualification__content"}>

            <div className="qualification__data">
              <div>
                <h3 className="qualification__title"> Product Designer </h3>
                <span className="qualification__subtitle"> UC Davis </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"> 2022- Present </i>
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>

            </div>

            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>

              <div>
                <h3 className="qualification__title"> UX Designer </h3>
                <span className="qualification__subtitle"> UC Davis </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"> 2022- Present </i>
                </div>
              </div>
            </div>

            <div className="qualification__data">
              <div>
                <h3 className="qualification__title"> Web Designer </h3>
                <span className="qualification__subtitle"> UC Davis </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"> 2022- Present </i>
                </div>
              </div>
              
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>
          </div>

        </div>
      </div>

    </section>
  )
}

export default Qualifications;
