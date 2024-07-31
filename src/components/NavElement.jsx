import React from "react";
import { NavLink } from "react-router-dom";

const NavElement = ({ text, link }) => {
  return (
    <li>
      <NavLink
        to={link}
        class="px-4 py-2 block bg-transparent text-black hover:text-[#3a10e5]"
        aria-current="page"
      >
        {text}
      </NavLink>
    </li>
  );
};

export default NavElement;
