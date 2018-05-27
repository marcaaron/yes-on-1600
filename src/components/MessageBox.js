import React from 'react';

const MessageBox = () => {
  const url = 'https://d3n8a8pro7vhmx.cloudfront.net/wholewashington/pages/144/attachments/original/1522975117/Yes1600Credo.pdf?1522975117';
  return(
    <div className="wwse-message-box">
      <p>
        <a href={url} rel="noopener noreferrer" target="_blank">
        Universal Healthcare
        </a> means high quality, comprehensive care (including dental and vision) for every Washington resident. It means fair and dedicated taxes are used to fund our healthcare, instead of escalating insurance costs with unpredictable out-of-pocket expenses. It means we can focus on our health and have the freedom to pursue our dreams.
      </p>
    </div>
  );
}

export default MessageBox;
