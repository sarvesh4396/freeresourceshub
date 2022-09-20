import React from "react";
import { SITE_VARS } from "./../constants/constants";

function Logo() {
  return (
    <div className="flex items-center flex-shrink-0 text-blue-900 mr-6">
      <img
        src={require("./../assets/images/logo.png")}
        alt="Site Logo"
        className="h-20 w-20 m-2"
      />
      <a href="/" className="mr-4 cursor-pointer py-1.5 font-bold">
        <div className="font-semibold text-xl tracking-tight">
          <span className="align-middle">{SITE_VARS.name}</span>
        </div>
      </a>
    </div>
  );
}

export default Logo;
