import React from "react";
import "./frame.css";
import { Button } from "../Button/Button";

const Frame = () => {
  return (
    <div className="frame">
      <div className="content_top">
        <div className="icon_field">
          hfhh
        </div>
      </div>
      <div className="content_bottom">
        <Button />
        <p>Click on this button to see different icons</p>
      </div>
    </div>
  );
};

export { Frame };
