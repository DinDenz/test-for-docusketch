import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './icon.css'

const Icon = ({randomIcon}) => {
  return (
  <>
    {randomIcon && 
    <FontAwesomeIcon 
    className="icon"
    icon={randomIcon} size="3x" />}
  </>
  )
};

export { Icon };
