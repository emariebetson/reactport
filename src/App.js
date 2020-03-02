import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
              <div className="KW_progressContainer">
          <div className="KW_progressBar">
          </div>
        </div>
        <div className="page">
          <nav id="colorlib-main-nav" role="navigation">
            <a href="#" className="js-colorlib-nav-toggle colorlib-nav-toggle active"><i /></a>
            <div className="js-fullheight colorlib-table">
              <div className="colorlib-table-cell js-fullheight">
                <div className="row no-gutters">
                  <div className="col-md-12 text-center">
                    <h1 className="mb-4"><a href="index.html" className="logo">ELIZABETH BETSON</a></h1>
                    <ul>
                      <li className="active"><a href="index.html"><span><small>01</small>Home</span></a></li>
                      <li><a href="about.html"><span><small>02</small>Resume</span></a></li>
                      <li><a href="portfolio.html"><span><small>03</small>Portfolio</span></a></li>
                      <li><a href="contact.html"><span><small>04</small>Contact</span></a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </nav>
          <div id="colorlib-page">
            <header>
              <div className="container">
                <div className="row">
                  <div className="col-md-12">
                    <div className="colorlib-navbar-brand">
                      <a className="colorlib-logo" href="index.html"><span className="logo-img" style={{backgroundImage: 'url(images/liz.jpg)'}} />Elizabeth Betson</a>
                    </div>
                    <a href="#" className="js-colorlib-nav-toggle colorlib-nav-toggle"><i /></a>
                  </div>
                </div>
              </div>
            </header>
            <section className="home-slider owl-carousel js-fullheight">
              <div className="slider-item js-fullheight">
                <div className="overlay" />
                <div className="container">
                  <div className="row slider-text align-items-center text-center justify-content-center" data-scrollax-parent="true">
                    <div className="col-md-12 ftco-animate" data-scrollax=" properties: { translateY: '70%' }">
                      <p><a href="#" className="scroll">Hello!</a></p>
                      <h1 className="mb-3" data-scrollax="properties: { translateY: '30%', opacity: 1.6 }">My name is Liz.</h1>
                    </div>
                  </div>
                </div>
              </div>
              <div className="slider-item js-fullheight">
                <div className="overlay" />
                <div className="container">
                  <div className="row slider-text align-items-center text-center justify-content-center" data-scrollax-parent="true">
                    <div className="col-md-12 ftco-animate" data-scrollax=" properties: { translateY: '70%' }">
                      <p><a href="#" className="scroll">I love</a></p>
                      <h1 className="mb-3" data-scrollax="properties: {translateY: '30%', opacity: 1.6}">science &amp; computers.</h1>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/* END slider */}
            <section className="ftco-section about-section">
              <div className="container">
                <div className="row d-flex" data-scrollax-parent="true">
                  <div className="col-md-2" />
                  <div className="col-md-6 wrap ftco-animate">
                    <div className="about-desc">
                      <h1 className="bold-text">About</h1>
                      <div className="p-5">
                        <h2 className="mb-5">ABOUT</h2>
                        <p>Despite growing up in rural Kansas (that type of town where the cows outnumber the folks), I've always thought a little outside of the Bermuda Rectangle.  After traveling around the world as an international model, I returned to my Midwest roots to earn my Bachelor of Science in both Honors Biology and Psychology from DePaul University in Chicago.</p>
                        <p>After five years as a laser and medical device sales savant, I realized that machines are a lot more interesting than [most] humans.</p>
                        <p>Now, I have realized my passion in building worlds that meld science, education, and tech into one saucy little stack.</p>
                        <h5>CONTACT</h5>
                        <p>Email: <a href="#">hire.elizabethb@gmail.com</a></p>
                        <p>Phone: <a href="#">(312) 523-6571</a></p>
                        <ul className="ftco-footer-social list-unstyled mt-4">
                          <li><a href="BetsonResume2018.pdf" target="_blank"><span className="icon-print" /></a></li>
                          <li><a href="www.linkedin.com/in/elizabethbetson"><span className="icon-linkedin" /></a></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section className="ftco-section">
              <div className="container">
                <div className="row justify-content-center mb-5 pb-5">
                  <div className="col-md-7 text-center heading-section ftco-animate">
                    <span>What i do</span>
                    <h2 />
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-4 d-flex align-self-stretch ftco-animate">
                    <div className="media block-6 services p-3 py-4 d-block text-center">
                      <div className="icon mb-3"><span className="icon-layers" /></div>
                      <div className="media-body">
                        <h3 className="heading">UI/UX Design</h3>
                        <h3 className="heading">Mobile App Design</h3>
                        <h3 className="heading">Responsive Design</h3>
                      </div>
                    </div>      
                  </div>
                  <div className="col-md-4 d-flex align-self-stretch ftco-animate">
                    <div className="media block-6 services p-3 py-4 d-block text-center">
                      <div className="icon mb-3"><span className="icon-gears" /></div>
                      <div className="media-body">
                        <h3 className="heading">Product Strategy</h3>
                        <h3 className="heading">Design Sprints</h3>
                        <h3 className="heading">UX Strategy</h3>
                      </div>
                    </div>      
                  </div>
                  <div className="col-md-4 d-flex align-self-stretch ftco-animate">
                    <div className="media block-6 services p-3 py-4 d-block text-center">
                      <div className="icon mb-3"><span className="icon-code" /></div>
                      <div className="media-body">
                        <h3 className="heading">HTML/CSS</h3>
                        <h3 className="heading">Prototyping</h3>
                        <h3 className="heading">User Testing</h3>
                      </div>
                    </div>    
                  </div>
                </div>
              </div>
            </section>
            <section className="ftco-section">
              <div className="container">
                <div className="row justify-content-center mb-5 pb-5">
                  <div className="col-md-7 text-center heading-section ftco-animate">
                    <span>Portfolio</span>
                    <h2 />
                  </div>
                </div>
                <div className="row no-gutters">
                  <div className="block-3 d-md-flex ftco-animate" data-scrollax-parent="true">
                    <a href="http://www.futureforecastfinder.com/" className="image d-flex justify-content-center align-items-center" style={{backgroundImage: 'url("https://images.unsplash.com/photo-1552799446-159ba9523315?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80")'}} data-scrollax=" properties: { translateY: '-30%'}">
                      <div className="icon d-flex text-center justify-content-center align-items-center">
                        <span className="icon-search" />
                      </div>
                    </a>
                    <div className="text">
                      <h4 className="subheading">Graph Change Over Time with Versatile Functions</h4>
                      <h2 className="heading"><a href="http://www.futureforecastfinder.com/">Future Forecast Finder</a></h2>
                      <p>A Responsive Website Featuring Future Climate Change Predictions Utilizing Meteostat, Chart.js, OpenWeather, and Google Maps APIs</p>
                      <p><a href="http://www.futureforecastfinder.com/">View Project</a></p>
                    </div>
                  </div>
                  <div className="block-3 d-md-flex ftco-animate" data-scrollax-parent="true">
                    <a href="https://emariebetson.github.io/weatherdashboard/" className="image order-2 d-flex justify-content-center align-items-center" style={{backgroundImage: 'url("https://images.unsplash.com/photo-1454789476662-53eb23ba5907?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=778&q=80")'}} data-scrollax=" properties: { translateY: '-30%'}">
                      <div className="icon d-flex text-center justify-content-center align-items-center">
                        <span className="icon-search" />
                      </div>
                    </a>
                    <div className="text order-1">
                      <h4 className="subheading">Search by City to Generate Weather Reports</h4>
                      <h2 className="heading"><a href="https://emariebetson.github.io/weatherdashboard/">Weather Dashboard</a></h2>
                      <p>A Responsive Five-Day Weather Search Bar Powered by OpenWeather API</p>
                      <p><a href="https://emariebetson.github.io/weatherdashboard/">View Project</a></p>
                    </div>
                  </div>
                  <div className="block-3 d-md-flex ftco-animate" data-scrollax-parent="true">
                    <a href="https://emariebetson.github.io/quiz/" className="image d-flex justify-content-center align-items-center" style={{backgroundImage: 'url("https://images.unsplash.com/photo-1551269901-5c5e14c25df7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60")'}} data-scrollax=" properties: { translateY: '-30%'}">
                      <div className="icon d-flex text-center justify-content-center align-items-center">
                        <span className="icon-search" />
                      </div>
                    </a>
                    <div className="text">
                      <h4 className="subheading">Test Your Skills, Muggle</h4>
                      <h2 className="heading"><a href="https://emariebetson.github.io/quiz/">Harry Potter Quiz</a></h2>
                      <p>A Timed Quiz that Logs Correct and Incorrect Responses and Scores</p>
                      <p><a href="https://emariebetson.github.io/quiz/">View Project</a></p>
                    </div>
                  </div>
                  <div className="block-3 d-md-flex ftco-animate" data-scrollax-parent="true">
                    <a href="https://emariebetson.github.io/pwgen/" className="image order-2 d-flex justify-content-center align-items-center" style={{backgroundImage: 'url("https://images.unsplash.com/photo-1548092372-0d1bd40894a3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80")'}} data-scrollax=" properties: { translateY: '-30%'}">
                      <div className="icon d-flex text-center justify-content-center align-items-center">
                        <span className="icon-search" />
                      </div>
                    </a>
                    <div className="text order-1">
                      <h4 className="subheading">Produce a Unique Password</h4>
                      <h2 className="heading"><a href="https://emariebetson.github.io/pwgen/">Random Password Generator</a></h2>
                      <p>An Application to Create Dynamic Password with Multiple Parameters</p>
                      <p><a href="https://emariebetson.github.io/pwgen/">View Project</a></p>
                    </div>
                  </div>
                  <div className="block-3 d-md-flex ftco-animate" data-scrollax-parent="true">
                    <a href="https://emariebetson.github.io/elizabethbetson/" className="image d-flex justify-content-center align-items-center" style={{backgroundImage: 'url("https://images.unsplash.com/photo-1485988412941-77a35537dae4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1544&q=80")'}} data-scrollax=" properties: { translateY: '-30%'}">
                      <div className="icon d-flex text-center justify-content-center align-items-center">
                        <span className="icon-search" />
                      </div>
                    </a>
                    <div className="text">
                      <h4 className="subheading">See Where It All Began</h4>
                      <h2 className="heading"><a href="https://emariebetson.github.io/elizabethbetson/">Original Portfolio</a></h2>
                      <p>A Basic Portfolio Applying HTML and CSS Frameworks</p>
                      <p><a href="https://emariebetson.github.io/elizabethbetson/">View Project</a></p>
                    </div>
                  </div>
                </div>
              </div>
            </section></div>
          <section className="ftco-section ftco-counter" id="section-counter">
            <div className="container">
              <div className="row justify-content-center mb-5 pb-5">
                <div className="col-md-7 text-center heading-section ftco-animate">
                  <h2>I might be a bit of a workaholic...</h2>
                </div>
              </div>
              <div className="row d-flex justify-content-start">
                <div className="col-md-5 col-sm-5 counter-wrap ftco-animate">
                  <div className="block-18">
                    <div className="text">
                      <span className="ftco-label">Clients</span>
                      <strong className="number" data-number={420}>0</strong>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row d-flex justify-content-center">
                <div className="col-md-5 col-sm-5 counter-wrap ftco-animate">
                  <div className="block-18">
                    <div className="text">
                      <span className="ftco-label">Project done</span>
                      <strong className="number" data-number={890}>0</strong>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row d-flex justify-content-end">
                <div className="col-md-5 counter-wrap ftco-animate">
                  <div className="block-18">
                    <div className="text">
                      <span className="ftco-label">Cups of coffee</span>
                      <strong className="number" data-number={1000}>0</strong>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <footer className="ftco-footer ftco-bg-dark ftco-section">
            <div className="container">
              <div className="row mb-5 justify-content-center">
                <div className="col-md-5 text-center">
                  <ul className="ftco-footer-social list-unstyled mt-4">
                    <li><a href="BetsonResume2018.pdf" target="_blank"><span className="icon-print" /></a></li>
                    <li><a href="www.linkedin.com/in/elizabethbetson"><span className="icon-linkedin" /></a></li>
                    <li><a href="hire.elizabethb@gmail.com"><span className="icon-envelope" /></a></li>
                  </ul>
                </div>
                <div className="ftco-footer-widget">
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12 text-center">
                <p>{/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
                  {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}</p>
              </div>
            </div>
          </footer></div>
        {/* loader */}
        <div id="ftco-loader" className="show fullscreen"><svg className="circular" width="48px" height="48px"><circle className="path-bg" cx={24} cy={24} r={22} fill="none" strokeWidth={4} stroke="#eeeeee" /><circle className="path" cx={24} cy={24} r={22} fill="none" strokeWidth={4} strokeMiterlimit={10} stroke="#F96D00" /></svg></div>
    </div>
  );
}

export default App;
