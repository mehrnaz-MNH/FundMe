import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { navlinks } from "../constants";
import { logo, sun } from "../assets";

const Icon = ({ styles, name, imgUrl, isActive, handleClick, isdisabled }) => (
  <div
    className={`w-[48px] h-[48px] rounded-[10px]
        ${
          isActive && isActive == name && "bg-[#2c2f32]"
        } flex justify-center items-center
        ${!isdisabled && "cursor-pointer"} ${styles} `}
    onClick={handleClick}
  >
    {!isActive ? (
      <img src={imgUrl} alt={name} className="w-1/2 h-1/2" />
    ) : (
      <img
        src={imgUrl}
        alt={name}
        className={`w-1/2 h-1/2 ${isActive != name && "grayscale"}  `}
      />
    )}
  </div>
);

const SideBar = () => {
  const navigate = useNavigate();
  const [Active, IsActive] = useState("dashboard");

  return (
    <div className="flex flex-col justify-between items-center sticky top-5 h-[93vh]">
      <Link to="/">
        <Icon
          name="logo"
          imgUrl={logo}
          styles="w-[52px] h-[52px] bg-[#2c2f32]"
        />
      </Link>

      <div className="flex-1 flex flex-col justify-between items-center bg-[#1c1c24] rounded-[20px] w-[75px] py-4 mt-12">
        <div className="flex flex-col justify-center items-center gap-3">
          {navlinks.map((navlink) => (
            <Icon
              key={navlink.name}
              name={navlink.name}
              imgUrl={navlink.imgUrl}
              isdisabled={navlink.disabled}
              isActive={Active}
              handleClick={() => {
                if (!navlink.disabled) {
                  IsActive(navlink.name);
                  navigate(navlink.link);
                }
              }}
            />
          ))}
        </div>

        <Icon
          styles="bg-[#1c1c24] shadow-secondary"
          name="sun"
          imgUrl={sun}
          isdisabled={false}
          isActive={Active}
          handleClick={() => {
            IsActive("sun");
          }}
        />
      </div>
    </div>
  );
};

export default SideBar;
