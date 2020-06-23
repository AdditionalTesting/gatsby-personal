import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/Layout';
import PageFooter from '../components/PageFooter';
import SideBar from '../components/SideBar';

import banner from '../assets/images/banner.jpg';

import pic1 from '../assets/images/MeetInTheMiddle.png';
import pic2 from '../assets/images/ShristiGPortfolio.png';
import pic3 from '../assets/images/AgentBasLogo.png';
import pic4 from '../assets/images/RailsBlogApp.png';



const sections = [
  { id: 'one', name: 'About' },
  { id: 'two', name: 'Technical Skillset' },
  { id: 'three', name: 'Projects' },
  { id: 'four', name: 'Contact' },
  { id: 'five', name: 'Elements' },
];
const IndexPage = () => (
  <Layout>
    <SideBar sections={sections} />
    <div id="wrapper">
      <div id="main">
        <section id="one">
          <div className="image main" data-position="center">
            <img src={banner} alt="" />
          </div>
          <div className="container">
            <header className="major">
              <h2>Full Stack Developer</h2>
              <p>
                Personal/Portfolio website built with <a href="https://gatsbyjs.org">GatsbyJS</a>.
              </p>
            </header>
            <p>
            Full Stack Developer with a demonstrated skill set in the information technology
            sector. Currently working with Ruby, Rails and Javascript all while
            learning to work in Node.js and React. My lifelong passion for tech has allowed
            me to work with outstanding teams and eventually find my way into
            an amazing network of Full Stackers.
            Looking to expand my knowledge and learn new technologies
            while contributing to existing and future projects.
            </p>
          </div>
        </section>

        <section id="two">
          <div className="container">
            <h3>Technical Skillset</h3>
            <p>
              3+ years in Software/Web development experience
              <br></br>
              6+ years in IT sector
            </p>
            <ul className="feature-icons">
              <li className="fa-code">Ruby/Ruby on Rails </li>
              <li className="fa-cubes">Heroku/AWS</li>
              <li className="fa-book">Automation(Ruby, Bash)</li>
              <li className="fa-coffee">HTML5/CSS3/SCSS</li>
              <li className="fa-bolt">JavaScript(Node.js, React, Express)</li>
              <li className="fa-users">Systems Administration(Linux, Windows)</li>
            </ul>
          </div>
        </section>

        <section id="three">
          <div className="container">
            <h3>Projects</h3>
            <p>
              Some of the projects I've built, either out of personal interest or as contract work from clients.
            </p>
            <div className="features">
              <article>
                <a href="/#" className="image">
                  <img src={pic1} alt="" />
                </a>
                <div className="inner">
                  <h4>Meet In The Middle</h4>
                  <p>
                  This app allows anyone to quickly decide on a meeting spot
                  by calculating the central location point between you and your friends. 
                  From the middle point, it will give you suggestions based on what type of activity you want to do.
                  </p>
                </div>
              </article>
              <article>
                <a href="/#" className="image">
                  <img src={pic2} alt="" />
                </a>
                <div className="inner">
                  <h4>shristig.com</h4>
                  <p>
                    Personal website built for a client.
                    I worked closesly with the client, doing development work,
                    while she provided the content and designs for the website.
                  </p>
                </div>
              </article>
              <article>
                <a href="/#" className="image">
                  <img src={pic3} alt="" style={{backgroundColor: "#4acaa8"}}/>
                </a>
                <div className="inner">
                  <h4>AgentBas.com</h4>
                  <p>
                    Business website developed for a client in the real estate sector.
                    Mostly front end focused, but also provided the client with an easy an effiecient way 
                    to deploy their full technology stack(GSuite, Domain, Hosting etc.)
                  </p>
                </div>
              </article>
              <article>
                <a href="/#" className="image">
                  <img src={pic4} alt="" />
                </a>
                <div className="inner">
                  <h4>Rails Blogging App</h4>
                  <p>
                    Basic blogging application built in Ruby on Rails.
                    Mostly back end focused.
                  </p>
                </div>
              </article>
            </div>
          </div>
        </section>

        <section id="four">
          <div className="container">
            <h3>Contact Me</h3>
            <p>
              Integer eu ante ornare amet commetus vestibulum blandit integer in
              curae ac faucibus integer non. Adipiscing cubilia elementum
              integer. Integer eu ante ornare amet commetus.
            </p>
            <form method="post" action="#">
              <div className="row gtr-uniform">
                <div className="col-6 col-12-xsmall">
                  <input type="text" name="name" id="name" placeholder="Name" />
                </div>
                <div className="col-6 col-12-xsmall">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Email"
                  />
                </div>
                <div className="col-12">
                  <input
                    type="text"
                    name="subject"
                    id="subject"
                    placeholder="Subject"
                  />
                </div>
                <div className="col-12">
                  <textarea
                    name="message"
                    id="message"
                    placeholder="Message"
                    rows="6"
                  />
                </div>
                <div className="col-12">
                  <ul className="actions">
                    <li>
                      <input
                        type="submit"
                        className="primary"
                        value="Send Message"
                      />
                    </li>
                    <li>
                      <input type="reset" value="Reset Form" />
                    </li>
                  </ul>
                </div>
              </div>
            </form>
          </div>
        </section>
        <section id="five">
          <div className="container">
            <h3>Elements</h3>
            <h4>Text</h4>
            <p>
              This is <b>bold</b> and this is <strong>strong</strong>. This is{' '}
              <i>italic</i> and this is <em>emphasized</em>. This is{' '}
              <sup>superscript</sup> text and this is <sub>subscript</sub> text.
              This is <u>underlined</u> and this is code:{' '}
              <code>for (;;) ... </code>. Finally,{' '}
              <a href="/#">this is a link</a>.
            </p>
            <hr />
            <header>
              <h4>Heading with a Subtitle</h4>
              <p>Lorem ipsum dolor sit amet nullam id egestas urna aliquam</p>
            </header>
            <br />
            <h5>
              This started contains all HTML elements
              <br />
              Checkout available styling
              <Link to="/Element"> here</Link>
            </h5>
          </div>
        </section>
      </div>
    </div>
    <section id="footer">
      <PageFooter />
    </section>
  </Layout>
);

export default IndexPage;
