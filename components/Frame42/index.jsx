import React from "react";
import "./Frame42.css";

function Frame42(props) {
  const { text49, text50, place, text51, text52, className } = props;

  return (
    <div className={`frame-4-2 ${className || ""}`}>
      <div className="text-38 valign-text-middle overpass-extra-bold-white-16px">{text49}</div>
      <div className="frame-1580">
        <div className="text-39 valign-text-middle typographybody16-regular">{text50}</div>
        <div className="frame-1580-item valign-text-middle typographybody16-regular">{place}</div>
        <div className="frame-1580-item valign-text-middle typographybody16-regular">{text51}</div>
        <div className="frame-1580-item valign-text-middle typographybody16-regular">{text52}</div>
      </div>
    </div>
  );
}

export default Frame42;
