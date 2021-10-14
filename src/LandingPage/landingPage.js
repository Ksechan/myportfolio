import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function LandingPage() {
  const [aboutMouseOver, setAboutMouseOver] = useState(false);
  const [workMouseOver, setWorkMouseOver] = useState(false);
  const [contactMouseOver, setContactMouseOver] = useState(false);

  return (
    <div className="height-container">
      <div className="sechan-img"></div>

      <div className="landing-page-container">
        <div className="grow-container">
          <div
            className="first-grow"
            onMouseEnter={() => {
              setAboutMouseOver(true);
            }}
            onMouseLeave={() => {
              setAboutMouseOver(false);
            }}
          >
            <Link to="/About" className="on-hover40">
              <div
                className={`text-color-white ${aboutMouseOver ? '' : 'hide'}`}
              >
                About
              </div>
              <div
                className={`text-color-white ${aboutMouseOver ? 'hide' : ''}`}
              >
                Hello.
              </div>
            </Link>
          </div>
        </div>

        <div className="grow-container">
          <div
            className="second-grow"
            onMouseEnter={() => {
              setWorkMouseOver(true);
            }}
            onMouseLeave={() => {
              setWorkMouseOver(false);
            }}
          >
            <Link to="/Work" className="on-hover40">
              <div className={`text-color-red ${workMouseOver ? '' : 'hide'}`}>
                Work
              </div>
              <div className={`text-color-red ${workMouseOver ? 'hide' : ''}`}>
                I am
              </div>
            </Link>
          </div>
        </div>

        <div className="grow-container">
          <div
            className="third-grow"
            onMouseEnter={() => {
              setContactMouseOver(true);
            }}
            onMouseLeave={() => {
              setContactMouseOver(false);
            }}
          >
            <Link to="/Contact" className="on-hover40">
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

export default LandingPage;
