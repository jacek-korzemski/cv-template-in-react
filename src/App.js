import React from "react";
import ReactToPdf from "react-to-pdf";
import MainWrapper from "./styled-components/MainWrapper";
import CvWrapper from "./styled-components/CvWrapper";
import LeftBar from "./styled-components/LeftBar";
import RightBar from "./styled-components/RightBar";
import LeftSection from "./styled-components/LeftSection";
import RightSection from "./styled-components/RightSection";
import profilowe from "./img/profile.jfif";
import { name, address1, address2, mail, phone, github, legalNote } from "./data/PersonalData";

const App = () => {
  const ref = React.createRef();

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
      <ReactToPdf targetRef={ref} filename="CV_Jacek_Korzemski.pdf">
        {({ toPdf }) => (
          <button onClick={toPdf} style={{ position: "absolute", top: 0, left: 0, zIndex: 9999 }}>
            Generate pdf
          </button>
        )}
      </ReactToPdf>
      <CvWrapper ref={ref}>
        <LeftBar>
          <img src={profilowe} alt="Profilowe" />
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
              <li>Doświadczenie pracy w metodyce SCRUM</li>
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
        </LeftBar>
        <RightBar>
          <RightSection>
            <h1 className="name">{name}</h1>
            <h2 className="title">Frontend Developer</h2>
          </RightSection>
          <RightSection>
            <h2 className="header">Doświadczenie</h2>
            <ul>
              <li className="list-parent">
                <p>CS Group S.A / Panorama Firm / WeNet S.A.</p>
                <ul>
                  <li>Wrzesień 2019 - obecnie: Frontend Developer</li>
                  <li>Wrzesień 2017 - Wrzesień 2019: Technik - specjalista SEO</li>
                </ul>
              </li>
              <li className="list-parent">
                <p>Yatta.pl</p>
                <ul>
                  <li>Wrzesień 2015 - luty 2017: magazynier, kierowca</li>
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
              <li className="skill">React {renderBolts(3)}</li>
              <li className="skill">PHP {renderBolts(3)}</li>
              <li className="skill">Wordpress {renderBolts(3)}</li>
              <li className="skill">Laravel {renderBolts(2)}</li>
            </ul>
          </RightSection>
          <RightSection>
            <h2 className="header">Dodatkowo</h2>
            <p style={{ textAlign: "justify" }}>
              Gatsby, Next.js, Bootstrap, Styled Componens, FreeMarker, wykorzystanie REST API, doświadczenie w pracy projektami Adobe Xd,
              współpraca z Eslint + Prettier, praca z systemem kontroli wersji (GIT, SVN), praca z automatyzacją wdrożeń (Jenkins, GitLab),
              Wordpress, Joomla, CodeIgniter, Bludit.
            </p>
          </RightSection>
          <p className="rodo">{legalNote}</p>
        </RightBar>
      </CvWrapper>
    </MainWrapper>
  );
};

export default App;
