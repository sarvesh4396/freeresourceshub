import React from "react";
import { SITE_VARS } from "./../constants/constants";

function Logo() {
  return (
    <a href="/" className="mr-4 cursor-pointer py-1.5 font-bold">
      <div className="flex align-middle text-black">
        {/* <img
          src={require("./../assets/images/logo.png")}
          alt="Site Logo"
          className="h-20 w-20 m-2"
        /> */}
        <span className="align-middle">{SITE_VARS.name}</span>
      </div>
    </a>
  );
}

export default Logo;
