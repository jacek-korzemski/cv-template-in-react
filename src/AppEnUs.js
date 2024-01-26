import React from "react";
import ReactToPdf from "react-to-pdf";
import MainWrapper from "./styled-components/MainWrapper";
import CvWrapper from "./styled-components/CvWrapper";
import LeftBar from "./styled-components/LeftBar";
import RightBar from "./styled-components/RightBar";
import LeftSection from "./styled-components/LeftSection";
import RightSection from "./styled-components/RightSection";
import profilowe from "./img/profile.jfif";
import {
  name,
  address1,
  address2,
  mail,
  phone,
  github,
  legalNoteEnUs,
} from "./data/PersonalData";

const App = () => {
  const renderBolts = (power) => {
    let a = [1, 2, 3, 4, 5];
    return (
      <ul className="bolts">
        {a.map((elem, index) => (
          <li className={elem <= power ? "on" : "off"} key={index}></li>
        ))}
      </ul>
    );
  };

  return (
    <MainWrapper>
      <CvWrapper>
        <LeftBar>
          <img src={profilowe} alt="Profilowe" />
          <LeftSection>
            <h2 className="header">Contact</h2>
            <p className="strong">Address:</p>
            <p>{address1}</p>
            <p>{address2}</p>
            <p className="strong">E-mail:</p>
            <p>{mail}</p>
            <p className="strong">Phone:</p>
            <p>{phone}</p>
            <p className="strong">GitHub:</p>
            <p>{github}</p>
          </LeftSection>
          <LeftSection>
            <h2 className="header">Additional advantages</h2>
            <ul>
              <li>Work experience in the SCRUM methodology</li>
              <li>English - B2 (but a little rusty at the moment)</li>
            </ul>
          </LeftSection>
          <LeftSection>
            <h2 className="header">Interests</h2>
            <ul>
              <li>Music</li>
              <li>Electronic</li>
              <li>Retro Technologies</li>
              <li>GameDev</li>
            </ul>
          </LeftSection>
        </LeftBar>
        <RightBar>
          <RightSection>
            <h1 className="name">{name}</h1>
            <h2 className="title">Frontend Developer</h2>
          </RightSection>
          <RightSection>
            <h2 className="header">Experience</h2>
            <ul>
              <li className="list-parent">
                <p>Grupa Pracuj S.A.</p>
                <ul>
                  <li>
                    April 2022 - December 2022: Frontend Developer
                    <br />- development and maintenance of applications in
                    REACT/NEXT.js technology
                  </li>
                </ul>
              </li>
              <li className="list-parent">
                <p>CS Group S.A / Panorama Firm / WeNet S.A.</p>
                <ul>
                  <li>
                    September 2019 - March 2022: Frontend Developer
                    <ul>
                      <li>
                        development and maintenance of applications in REACT
                        technology
                      </li>
                      <li>
                        creating FreeMarker templates based on Adobe Xd projects
                        for Spring Boot backend
                      </li>
                      <li>
                        creating and optimization company website based on
                        Gatsby
                      </li>
                    </ul>
                  </li>
                  <li>
                    September 2017 - September 2019: Technical SEO Specialist
                    <ul>
                      <li>
                        content update on websites in plain HTML, Wordpress,
                        Joomla, Drupal, Modx and custom CMS'
                      </li>
                      <li>
                        optimization websites for Google PageSpeed Insights
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
            </ul>
          </RightSection>
          <RightSection>
            <h2 className="header">Education</h2>
            <ul>
              <li className="list-parent">
                <p>WSB University - major: computer science</p>
                <ul>
                  <li>October 2020 - now</li>
                </ul>
              </li>
              <li className="list-parent">
                <p>
                  ŻAK Post-Secondary School - major: technician - IT specialist
                </p>
                <ul>
                  <li>2016 - 2017</li>
                  <li>Qualifications gained: E12, E13</li>
                </ul>
              </li>
              <li className="list-parent">
                <p>Warsaw University of Technology - major: management</p>
                <ul>
                  <li>2012 - 2015</li>
                </ul>
              </li>
            </ul>
          </RightSection>
          <RightSection>
            <h2 className="header">Skills</h2>
            <ul className="skills">
              <li className="skill">HTML {renderBolts(5)}</li>
              <li className="skill">CSS {renderBolts(5)}</li>
              <li className="skill">SCSS {renderBolts(4)}</li>
              <li className="skill">JavaScript {renderBolts(4)}</li>
              <li className="skill">React {renderBolts(4)}</li>
              <li className="skill">Jest {renderBolts(3)}</li>
              <li className="skill">TypeScript {renderBolts(3)}</li>
              <li className="skill">Svelte {renderBolts(3)}</li>
              <li className="skill">Next.js {renderBolts(2)}</li>
              <li className="skill">NodeJS {renderBolts(2)}</li>
              <li className="skill">PHP {renderBolts(2)}</li>
            </ul>
          </RightSection>
          <RightSection>
            <div
              style={{
                marginTop: "42px",
                display: "flex",
                height: "fit-content",
                alignItems: "stretch",
              }}
            >
              <div style={{ width: "100%" }}>
                <h3>Technologies</h3>
                <ul>
                  <li>React Testing Library</li>
                  <li>Styled-Components</li>
                  <li>Storybook</li>
                  <li>Linaria</li>
                  <li>ESbuild</li>
                  <li>GIT / SVN</li>
                  <li>Gatsby</li>
                  <li>FreeMarker</li>
                </ul>
              </div>
              <div style={{ width: "100%" }}>
                <h3>Tools</h3>
                <ul>
                  <li>Grafana</li>
                  <li>Prometheus</li>
                  <li>Kibana</li>
                  <li>Pingdom</li>
                  <li>AdobeXD / Figma</li>
                  <li>Jenkins, Gitlab</li>
                  <li>Postman</li>
                </ul>
              </div>
            </div>
            <h3 className="header">Additional</h3>
            <p style={{ textAlign: "justify" }}>JIRA, Pivotal Tracker</p>
          </RightSection>
          <p className="rodo">{legalNoteEnUs}</p>
        </RightBar>
      </CvWrapper>
    </MainWrapper>
  );
};

export default App;
