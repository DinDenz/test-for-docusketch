import "./frame.css";
import { Button } from "../Button/Button";
import { Icon } from "../Icon/Icon";
import { icons } from "../db";
import { useState } from "react";

const Frame = () => {
  const [randomIcon, setRandomIcon] = useState(null);

  const generateRandomIcon = () => {
    const randomIndex = Math.floor(Math.random() * icons.length);
    setRandomIcon(icons[randomIndex]);
  };

  return (
    <div className="frame">
      <div className="content_top">
        <div className="icon_field">
          <Icon randomIcon={randomIcon}/>
        </div>
      </div>
      <div className="content_bottom">
        <Button generateRandomIcon={generateRandomIcon}/>
        <p>Click on this button to see different icons</p>
      </div>
    </div>
  );
};

export { Frame };
