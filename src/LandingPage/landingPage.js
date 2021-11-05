import { useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import { Link } from 'react-router-dom';

function LandingPage() {
  const landingPageQuery = useMediaQuery({
    query: '(min-width:769px)',
  });

  const [aboutMouseOver, setAboutMouseOver] = useState(false);
  const [workMouseOver, setWorkMouseOver] = useState(false);
  const [contactMouseOver, setContactMouseOver] = useState(false);

  const [mobileClick, setMobileClick] = useState(false);

  const click = () => {
    if (landingPageQuery === false) {
      setMobileClick(!mobileClick);
      console.log(mobileClick);
    }
  };

  return (
    <div onClick={click}>
      <div className="bg-img"></div>

      <div className="landing-page-container">
        <div className="grow-container on-hover40">
          <div
            className={`${mobileClick ? 'first-grow2' : 'first-grow'}`}
            onMouseEnter={() => {
              setAboutMouseOver(true);
            }}
            onMouseLeave={() => {
              setAboutMouseOver(false);
            }}
          >
            <Link to="/About">
              <div
                className={`text-color-white ${
                  landingPageQuery
                    ? `${aboutMouseOver ? '' : 'hide'}`
                    : `${mobileClick ? '' : 'hide'}`
                }`}
              >
                About
              </div>
              <div
                className={`text-color-white ${
                  landingPageQuery
                    ? `${aboutMouseOver ? 'hide' : ''}`
                    : `${mobileClick ? 'hide' : ''}`
                }`}
              >
                Hello.
              </div>
            </Link>
          </div>
        </div>

        <div className="grow-container on-hover40">
          <div
            className={`${mobileClick ? 'second-grow2' : 'second-grow'}`}
            onMouseEnter={() => {
              setWorkMouseOver(true);
            }}
            onMouseLeave={() => {
              setWorkMouseOver(false);
            }}
          >
            <Link to="/Work">
              <div
                className={`text-color-red ${
                  landingPageQuery
                    ? `${workMouseOver ? '' : 'hide'}`
                    : `${mobileClick ? '' : 'hide'}`
                }`}
              >
                Work
              </div>
              <div
                className={`text-color-red ${
                  landingPageQuery
                    ? `${workMouseOver ? 'hide' : ''}`
                    : `${mobileClick ? 'hide' : ''}`
                }`}
              >
                I am
              </div>
            </Link>
          </div>
        </div>

        <div className="grow-container on-hover40">
          <div
            className={`${mobileClick ? 'third-grow2' : 'third-grow'}`}
            onMouseEnter={() => {
              setContactMouseOver(true);
            }}
            onMouseLeave={() => {
              setContactMouseOver(false);
            }}
          >
            <Link to="/Contact">
              <div
                className={`text-color-red ${
                  landingPageQuery
                    ? `${contactMouseOver ? '' : 'hide'}`
                    : `${mobileClick ? '' : 'hide'}`
                }`}
              >
                Contact
              </div>
              <div
                className={`text-color-red ${
                  landingPageQuery
                    ? `${contactMouseOver ? 'hide' : ''}`
                    : `${mobileClick ? 'hide' : ''}`
                }`}
              >
                Sechan
              </div>
            </Link>
          </div>
        </div>
      </div>
      <div
        className={`tap-anywhere text-color-white ${
          landingPageQuery ? 'hide' : ''
        }`}
      >
        Tap anywhere
      </div>
    </div>
  );
}

export default LandingPage;
