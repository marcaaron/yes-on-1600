import React from 'react';
import { addCommas } from '../helpers/helper-functions';

const MONTH = 12;
const ContributionsRow = ({link, title, contribution}) => {
  return(
    <div className="wwse-contributions-row">
      <p className="wwse-contributions-row-heading">
        <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        >
          {title}
        </a>
      </p>
      <p className="wwse-contributions-row-result">
        ${addCommas(Math.floor(contribution / MONTH))}/mo
      </p>
    </div>
  )
}

export default ContributionsRow;
