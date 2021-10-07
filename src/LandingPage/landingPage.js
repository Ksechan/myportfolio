import React, { useEffect, useState } from 'react'
import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from "react-router-dom";

function LandingPage() {
  const [aboutMouseOver, setAboutMouseOver] = useState(false);
  const [workMouseOver, setWorkMouseOver] = useState(false);
  const [contactMouseOver, setContactMouseOver] = useState(false);

  return (
    <BrowserRouter>
      
      <header >
        
        <div className="sechan-img">
        </div>
  

        <div className="landing-page-container">

            <div className="first-grow-container">
              <div className="first-grow"
              onMouseEnter={() => { setAboutMouseOver(true) }}
              onMouseLeave={() => { setAboutMouseOver(false) }}>
                <Link to="/About" className={`hello ${aboutMouseOver ? '' : 'hide'}`}>
                  <div>
                  About
                  </div>
                </Link>
                <div className={`hello ${aboutMouseOver ? 'hide' : ''}`}>
                Hello.
                </div>
            </div>
          </div>


        
            <div className="second-grow-container">
              <div className="second-grow"
                onMouseEnter={() => { setWorkMouseOver(true) }}
                  onMouseLeave={() => { setWorkMouseOver(false) }}>
                <Link to="/Work" className={`${workMouseOver ? '' : 'hide'}`}>
                  <div className="text-color-red ">
                    Work
                  </div>
                </Link>
                <div className={`text-color-red ${workMouseOver ? 'hide' : ''}`}>
                  I am
                </div>
              </div>
            </div>


          <div className="third-grow-container">
            <div className="third-grow"
                onMouseEnter={() => { setContactMouseOver(true) }}
                  onMouseLeave={() => { setContactMouseOver(false) }}>
                <Link to="/Contact" className={`${contactMouseOver ? '' : 'hide'}`}>
                  <div className="text-color-red ">
                    Contact
                  </div>
                </Link>
                <div className={`text-color-red ${contactMouseOver ? 'hide' : ''}`}>
                  Sechan
                </div>
            </div>
          </div>
          

          
        </div>
        

        </header>

    </BrowserRouter>
  );
}

export default LandingPage;