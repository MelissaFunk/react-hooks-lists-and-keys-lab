import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  const NavLinks = links.map(link => (
    <a href={"#" + link} key={link}>{link}</a>
  ))
  return <nav>{NavLinks}</nav>;
}

export default NavBar;
