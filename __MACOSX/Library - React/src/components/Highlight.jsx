import React from 'react';

const Highlight = ({ icon, title, para }) => {
  return (
    <div className="highlight">
     <div className="highlight-img">
       {icon}
     </div>
      <h3 className="highlight__subtitle">{subtitle}</h3>
      <p className="highlight__para">{para}</p>
    </div>
  );
};

export default Highlight;