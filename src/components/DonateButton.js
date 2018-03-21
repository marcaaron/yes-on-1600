import React from 'react';

const DonateButton = () => {
  const url = "https://www.crowdpac.com/campaigns/337576/donate-to-get-all-of-washington-covered"
  return (
    <a className="donate-button" href={url} target="_blank" rel="noopener noreferrer">
      <p className="button-large-text"><strong>Donate Here</strong></p>
      <p>Make Universal Healthcare our new reality</p>
    </a>
  )
}
export default DonateButton;