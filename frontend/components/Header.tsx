import React from "react";
import { NextPage } from "next";
import Link from "next/link";
import Nav from "./Nav";

const Header: NextPage = () => {
  return (
    <header>
      <div className="bar">
        <Link href="/">Sick fits</Link>
      </div>
      <div className="sub-bar">
        <p>Search</p>
      </div>
      <Nav />
    </header>
  );
};

export default Header;
