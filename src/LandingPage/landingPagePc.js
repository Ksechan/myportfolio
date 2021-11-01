import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function LandingPagePc() {
  const [aboutMouseOver, setAboutMouseOver] = useState(false);
  const [workMouseOver, setWorkMouseOver] = useState(false);
  const [contactMouseOver, setContactMouseOver] = useState(false);

  // const isPc = useMediaQuery({
  //   query: '(min-width:1024px)',
  // });
  // const isTablet = useMediaQuery({
  //   query: '(min-width:768px) and (max-width:1023px)',
  // });
  // const isMobile = useMediaQuery({
  //   query: '(max-width:767px)',
  // });

  // const LandingPageQuery = isPc ? LandingPagePc : '모바일';

  return (
    <div>
      <div className="bg-img"></div>

      <div className="landing-page-container">
        <div className="grow-container on-hover40">
          <div
            className="first-grow"
            onMouseEnter={() => {
              setAboutMouseOver(true);
            }}
            onMouseLeave={() => {
              setAboutMouseOver(false);
            }}
          >
            <Link to="/About">
              <span
                className={`text-color-white ${aboutMouseOver ? '' : 'hide'}`}
              >
                About
              </span>
              <span
                className={`text-color-white ${aboutMouseOver ? 'hide' : ''}`}
              >
                Hello.
              </span>
            </Link>
          </div>
        </div>

        <div className="grow-container on-hover40">
          <div
            className="second-grow"
            onMouseEnter={() => {
              setWorkMouseOver(true);
            }}
            onMouseLeave={() => {
              setWorkMouseOver(false);
            }}
          >
            <Link to="/Work">
              <div className={`text-color-red ${workMouseOver ? '' : 'hide'}`}>
                Work
              </div>
              <div className={`text-color-red ${workMouseOver ? 'hide' : ''}`}>
                I am
              </div>
            </Link>
          </div>
        </div>

        <div className="grow-container on-hover40">
          <div
            className="third-grow"
            onMouseEnter={() => {
              setContactMouseOver(true);
            }}
            onMouseLeave={() => {
              setContactMouseOver(false);
            }}
          >
            <Link to="/Contact">
              <div
                className={`text-color-red ${contactMouseOver ? '' : 'hide'}`}
              >
                Contact
              </div>
              <div
                className={`text-color-red ${contactMouseOver ? 'hide' : ''}`}
              >
                Sechan
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPagePc;
