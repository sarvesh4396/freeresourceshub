import React from "react";
import { SITE_VARS } from "./../constants/constants";
import { Typography, Avatar } from "@material-tailwind/react";

function Logo() {
  return (
    <Typography
      as="a"
      href="/"
      variant="lead"
      className="mr-4 cursor-pointer py-1.5 font-bold"
    >
      <div className="flex align-middle">
        {/* <img
          src={require("./../assets/images/logo.png")}
          alt="Site Logo"
          className="h-20 w-20 m-2"
        /> */}
        <span className="align-middle">{SITE_VARS.name}</span>
      </div>
    </Typography>
  );
}

export default Logo;
