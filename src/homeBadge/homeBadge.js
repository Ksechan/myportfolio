import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function HomeBadge() {
  const [homeBadgeMouseOver, setHomebadgeMouseOver] = useState(false);

  return (
    <div
      onMouseEnter={() => {
        setHomebadgeMouseOver(true);
      }}
      onMouseLeave={() => {
        setHomebadgeMouseOver(false);
      }}
    >
      <div className="homebadge-container">
        <Link to="/" href="Home" className="homebadge-link">
          <button
            className={`homebadge-btn ${homeBadgeMouseOver ? '' : 'hide'}`}
          >
            sechan.home
          </button>
          <button
            className={`homebadge-btn ${homeBadgeMouseOver ? 'hide' : ''}`}
          >
            sechan.
          </button>
        </Link>
      </div>
    </div>
  );
}

export default HomeBadge;
