import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';

function HomeBadge() {
  const [homeBadgeMouseOver, setHomebadgeMouseOver] = useState(false);

  const homeBadgeQuery = useMediaQuery({
    query: '(min-width:769px)',
  });

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
            className={`homebadge-btn ${
              homeBadgeQuery ? `${homeBadgeMouseOver ? '' : 'hide'}` : 'hide'
            } `}
          >
            sechan.home
          </button>
          <button
            className={`homebadge-btn ${
              homeBadgeQuery ? `${homeBadgeMouseOver ? 'hide' : ''}` : ''
            } `}
          >
            sechan.
          </button>
        </Link>
      </div>
    </div>
  );
}

export default HomeBadge;
