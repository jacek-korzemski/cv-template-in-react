import React from "react";
import MainWrapper from "./styled-components/MainWrapper";
import CvWrapper from "./styled-components/CvWrapper";
import LeftSection from "./styled-components/LeftSection";
import RightSection from "./styled-components/RightSection";
import styled from "styled-components";
import {
  name,
  address1,
  address2,
  mail,
  phone,
  github,
  legalNote,
} from "./data/PersonalData";

const Grid = styled.div`
  display: grid;
  grid-template-columns: 260px 1fr;
  grid-template-rows: 92px 1fr;
  grid-column-gap: 0px;
  grid-row-gap: 0px;

  background: rgb(237, 0, 140);
  background: linear-gradient(
    37deg,
    rgba(237, 0, 140, 1) 0%,
    rgba(255, 255, 255, 1) 50%,
    rgba(237, 0, 140, 1) 100%
  );

  .div1 {
    grid-area: 1 / 1 / 2 / 3;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .div2 {
    grid-area: 2 / 1 / 3 / 2;
    padding: 15px;
  }
  .div3 {
    grid-area: 2 / 2 / 3 / 3;
    background: white;
    padding: 15px;
  }
`;

const App = () => {
  const renderBolts = (power) => {
    let a = [1, 2, 3, 4, 5];
    return (
      <ul className="bolts">
        {a.map((elem, index) => (
          <li className={elem <= power ? "on" : "off"}></li>
        ))}
      </ul>
    );
  };

  return (
    <MainWrapper>
      <CvWrapper>
        <Grid>
          <div className="div2">
            <LeftSection>
              <h2 className="header">Dane kontaktowe</h2>
              <p className="strong">Adres:</p>
              <p>{address1}</p>
              <p>{address2}</p>
              <p className="strong">E-mail:</p>
              <p>{mail}</p>
              <p className="strong">Telefon:</p>
              <p>{phone}</p>
              <p className="strong">GitHub:</p>
              <p>{github}</p>
            </LeftSection>
            <LeftSection>
              <h2 className="header">Dodatkowe atuty</h2>
              <ul>
                <li>
                  Doświadczenie w pracy <br /> w metodyce SCRUM/AGILE
                </li>
                <li>Język Angielski - B2</li>
              </ul>
            </LeftSection>
            <LeftSection>
              <h2 className="header">Zainteresowania</h2>
              <ul>
                <li>Muzyka</li>
                <li>Elektronika</li>
                <li>Retro technologie</li>
                <li>GameDev</li>
              </ul>
            </LeftSection>
          </div>
          <div className="div1">
            <RightSection style={{ marginBottom: 0 }}>
              <h1 className="name">{name}</h1>
              <h2 className="title" style={{ marginTop: "-8px" }}>
                <em>Frontend Developer</em>
              </h2>
            </RightSection>
          </div>
          <div className="div3">
            <RightSection>
              <h2 className="header">Doświadczenie</h2>
              <ul>
                <li className="list-parent">
                  <p>Cyfrowy Polsat</p>
                  <ul>
                    <li>
                      Styczeń 2023 - obecnie: Frontend Developer
                      <br />- Rozwój i utrzymanie aplikacji w technologii
                      React/Next.JS
                      <br />- Rozwój i utrzymanie aplikacji JS do bezpiecznogo
                      odtwarzania filmów z DRM
                    </li>
                  </ul>
                </li>
                <li className="list-parent">
                  <p>Grupa Pracuj S.A.</p>
                  <ul>
                    <li>
                      Kwiecień 2022 - Grudzień 2022: Frontend Developer
                      <br />- Rozwój aplikacji w technologii React/Next.JS
                    </li>
                  </ul>
                </li>
                <li className="list-parent">
                  <p>CS Group S.A / Panorama Firm / WeNet S.A.</p>
                  <ul>
                    <li>
                      Wrzesień 2019 - Marzec 2022: Frontend Developer
                      <br />- Tworzenie aplikacji w technologii React,
                      przygotowanie szablonów we FreeMarker
                    </li>
                    <li>
                      Wrzesień 2017 - Wrzesień 2019: Technik - specjalista SEO
                      <br />- techniczna opieka nad stronami pod kątem seo,
                      edycja treści, optymalizacja wydajności.
                    </li>
                  </ul>
                </li>
              </ul>
            </RightSection>
            <RightSection>
              <h2 className="header">Edukacja</h2>
              <ul>
                <li className="list-parent">
                  <p>Wyższa Szkoła Bankowa - kierunek: informatyka</p>
                  <ul>
                    <li>Październik 2020 - obecnie</li>
                  </ul>
                </li>
                <li className="list-parent">
                  <p>Szkoła Policealna ŻAK - kierunek: technik - informatyk</p>
                  <ul>
                    <li>2016 - 2017</li>
                    <li>Zdobyte kwalifikacje: E12, E13</li>
                  </ul>
                </li>
                <li className="list-parent">
                  <p>Politechnika Warszawska - kierunek: zarządzanie</p>
                  <ul>
                    <li>2012 - 2015</li>
                  </ul>
                </li>
              </ul>
            </RightSection>
            <RightSection>
              <h2 className="header">Umiejętności</h2>
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
                  <h3>Technologie</h3>
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
                  <h3>Narzędzia</h3>
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
              <h3 className="header">Dodatkowo</h3>
              <p style={{ textAlign: "justify" }}>JIRA, Pivotal Tracker</p>
            </RightSection>
            <p className="rodo">{legalNote}</p>
          </div>
        </Grid>
      </CvWrapper>
    </MainWrapper>
  );
};

export default App;
