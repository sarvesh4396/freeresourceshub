import React from "react";
import { SITE_VARS } from "./../constants/constants";

function Logo() {
  return (
    <div className="flex items-center gap-2 text-white">
      <img
        src={require("./../assets/images/logo.png")}
        alt="Site Logo"
        className="h-20 w-20 my-2 invert"
      />
      <a href="/" className="cursor-pointer py-1.5 font-bold">
        <div className="font-bold text-2xl tracking-tight">
          <span className="align-middle">{SITE_VARS.name}</span>
        </div>
      </a>
    </div>
  );
}

export default Logo;
