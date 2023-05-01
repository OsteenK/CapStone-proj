import React, { useState } from "react";
import './accordionbox.css';

const AccordionBox = ({ title, text, status }) => {
  const [accordionStatus, setAccordionStatus] = useState(status);
  const handleClick = () => {
    setAccordionStatus(!accordionStatus);
  };
  return (
    <div className="ac">
      <h2 className="ac-q">
        <span
          onKeyUp={handleClick}
          onClick={handleClick}
          role="button"
          tabIndex="0"
        >
          {title}
        </span>
      </h2>
      {accordionStatus === true ? (
        <div className="ac-a animated fadeInUp">
          <p className="accordion__content-desc">{text}</p>
        </div>
      ) : null}
    </div>
  );
};

export default AccordionBox;
