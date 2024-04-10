import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Icon = ({randomIcon}) => {
  return (<div>
    {randomIcon && 
    <FontAwesomeIcon 
    className="icon"
    icon={randomIcon} size="3x" />}
  </div>
  )
};

export { Icon };
