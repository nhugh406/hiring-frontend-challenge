import React from 'react';
import { array, string, number } from 'prop-types';
import './styles.scss';

const propTypes = {
  id: number.isRequired,
  title: string.isRequired,
  userName: string.isRequired,
  numViews: number.isRequired,
  numVotes: number.isRequired,
  numComments: number.isRequired,
  numHearts: number.isRequired,
  rank: number.isRequired,
  dateCreated: string.isRequired,
  colors: array.isRequired,
  description: string.isRequired,
  url: string.isRequired,
  imageUrl: string.isRequired,
  badgeUrl: string.isRequired,
  apiUrl: string.isRequired,
};

function ColourCard({
  id,
  title,
  userName,
  numViews,
  numVotes,
  numComments,
  numHearts,
  rank,
  dateCreated,
  colors,
  description,
  url,
  imageUrl,
  badgeUrl,
  apiUrl,
}) {
  return (
    <div key={id} className="card">
      <div className="details">
        <div className="subsection">
          <div className="title">{title}</div>
          <div className="subTitle">
            by {userName} at {dateCreated}
          </div>
        </div>

        <div className="buttonSection">
          <div>{numViews} views</div>
          <div>{numVotes} votes</div>
        </div>
      </div>
      <div className="color-block">
        {colors.map((col) => (
          <div style={{ background: `#${col}` }} key={col}></div>
        ))}
      </div>
    </div>
  );
}

ColourCard.propTypes = propTypes;
export default ColourCard;
