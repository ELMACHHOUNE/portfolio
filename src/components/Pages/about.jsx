// import Typed from "react-typed";
import React from "react";
// import { TechData } from "../../data/Tech";
// import openai from "openai";
function About({ dark, updateDark }) {
  return (
    <>
      <main className={`flex-shrink-0 ${dark ? "" : "home"}`}>
        <div className="text-light container-fluid">
          <section
            id="about"
            className={`about container-fluid ${
              dark ? "text-dark" : "text-light"
            }`}
          >
            <div className="container-fluid">
              <div className="row">
                <div
                  className="container-fluid col-lg-10 content bg-transparent mt-2"
                  data-aos="fade-left"
                >
                  <div className="row">
                    <div className="col">
                      <div className="text-left  p-2">
                        <img
                          src="img/my_pic.png"
                          className="img-fluid h-25 p-0 col-7 col-lg-5 rounded mb-2"
                          alt="Yelmouss"
                        />
                        <br />
                        <h1 className="text-uppercase ps-0 fs-2 fw-bolder  lh-1 position-relative p-2">
                          About
                        </h1>
                        <h1 className="fw-bolder text-outlined ps-0 fs-lg-7 fs-sm-6 fs-5 lh-1 mt-sm-n4 mt-n3 position-relative ">
                          Me
                        </h1>
                      </div>
                      <h1>Fullstack Web Developer</h1>
                      <p className="fst-italic">
                        Passionate about new technologies and Software Dev
                      </p>
                      <div className="row">
                        <div className="col-lg-6">
                          <ul>
                            <li>
                              <i
                                className="fas fa-chevron-right"
                                aria-hidden="true"
                              ></i>
                              <strong>Birthday:</strong>
                              <span>01 Mars 1998</span>
                            </li>
                            <li>
                              <i
                                className="fas fa-chevron-right"
                                aria-hidden="true"
                              ></i>
                              <strong>Website:</strong>
                              <span>
                                <a href="./"> Here </a>
                              </span>
                            </li>
                            <li>
                              <i
                                className="fas fa-chevron-right"
                                aria-hidden="true"
                              ></i>
                              <strong>Phone:</strong>
                              <span>+212 649 455 082</span>
                            </li>
                            <li>
                              <i
                                className="fas fa-chevron-right"
                                aria-hidden="true"
                              ></i>
                              <strong>City:</strong>
                              <span>Rabat, Morrocco</span>
                            </li>
                          </ul>
                        </div>
                        <div className="col-lg-6">
                          <ul>
                            <li>
                              <i
                                className="fas fa-chevron-right"
                                aria-hidden="true"
                              ></i>
                              <strong>Age:</strong> <span>25</span>
                            </li>
                            <li>
                              <i
                                className="fas fa-chevron-right"
                                aria-hidden="true"
                              ></i>
                              <strong>Degree:</strong> <span>Bacheloor</span>
                            </li>
                            <li>
                              <i
                                className="fas fa-chevron-right"
                                aria-hidden="true"
                              ></i>
                              <strong>Email:</strong>
                              <span>business.elmachhoune@gmail.com</span>
                            </li>
                            <li>
                              <i
                                className="fas fa-chevron-right"
                                aria-hidden="true"
                              ></i>
                              <strong>Freelance:</strong> <span>Available</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <p className="fs-3 fst-italic">
                        Certified in both F/E and B/E technologies. I developed
                        applications and programs that made the work amazing
                      </p>
                    </div>
                    <div className="col-11 col-lg-6 ">
                      <section className="py-5">
                        <ul className="timeline-with-icons">
                          <li className="timeline-item mb-5">
                            <span className="timeline-icon">
                              <i
                                className="fas fa-rocket text-danger  fs-2 fa-sm fa-fw"
                                aria-hidden="true"
                              ></i>
                            </span>
                            <h5 className="fw-bold">Software Developer</h5>
                            <p>2018-present</p>
                            <p>
                              The Work involved in developing a website for the
                              Internet or an intranet. Web development can range
                              from the development of a simple plain text static
                              page to complex web applications, e-businesses and
                              social networking services
                            </p>
                          </li>
                          <li className="timeline-item mb-5">
                            <span className="timeline-icon">
                              <i
                                className="fas fa-hand-holding-usd text-warning fs-2 fa-fw"
                                aria-hidden="true"
                              ></i>
                            </span>
                            <h5 className="fw-bold">
                              Bachelor in SVT &amp; SH
                            </h5>
              
                          </li>
                        </ul>
                      </section>

                      <div className="hori-timeline" dir="ltr">
                        <ul className="list-inline events">
                          <li className="list-inline-item event-list">
                            <div className="px-4">
                              <div className="event-date bg-light text-dark fs-bold">
                                2015
                              </div>
                              <h5 className="font-size-16">
                                Real Time Analyst
                              </h5>
                            </div>
                          </li>
                          <li className="list-inline-item event-list">
                            <div className="px-4">
                              <div className="event-date bg-light text-dark fs-bold">
                                2017
                              </div>
                              <h5 className="font-size-16">
                                Analyst intraday Performer
                              </h5>
                            </div>
                          </li>
                          <li className="list-inline-item event-list">
                            <div className="px-4">
                              <div className="event-date bg-light text-dark fs-bold">
                                2019
                              </div>
                              <h5 className="font-size-16">
                                Developement informatique
                              </h5>
                            </div>
                          </li>

                          <li className="list-inline-item event-list">
                            <div className="px-4">
                              <div className="event-date bg-light text-dark fs-bold">
                                2023
                              </div>
                              <h5 className="font-size-16">
                                Full-stack Web developer 
                              </h5>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}

export default About;
