import React, { Component } from 'react'

export default class Timeline extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-experience" data-section="timeline">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                <span className="heading-meta">highlights</span>
                <h2 className="colorlib-heading animate-box">Timeline</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="timeline-centered">
                <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-1">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Product Engineer at Codingmart Technologies <span>2021-present</span></h2>
                        <p>I joined Codingmart Technologies as a Product Engineer for the role of Frondend Developer. My major part of work includes creating the website for the client using ReactJS, Redux, HTML, CSS and Javascript. I also started learning NodeJS, Express and MongoDB.</p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-3">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>System Engineer at Infosys <span>2019-2021</span></h2>
                        <p>I joined Infosys as a System Engineer in the Data and UI team.My major part of work includes creating the website for the client.For the data team, I worked on Robotic Process Automation, ETL tools such as SSIS and on MySQL.</p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInTop">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-4">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Undergraduation at JUIT <span>2015-2019</span></h2>
                        <p>I pursued my under-graduation studies with major in I.T.(Information & Technology). I have taken courses like DSA, OOPs, Operating systems, Cloud Computing, Web Development over the years and have better understanding of these subjects.I have also been part of JYC(Jaypee Youth Club) since my first year of college.I was the Co-ordinator of JYC for one Year.</p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-5">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Primary and Higher Education <span>2002-2014</span></h2>
                        <p>I have completed my higher secondary education with major subjects as Physics,Chemistry & Maths with 90 merit. During my time at school, I have developed interest in Web development and coding. I chose C++ as my optional in my 10+2. </p> 
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry begin animate-box" data-animate-effect="fadeInBottom">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-none">
                      </div>
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}