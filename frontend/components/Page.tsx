import { NextPage } from "next";
import React from "react";
import Header from "./Header";

interface PageProps {
  children: React.ReactNode;
}

const Page: NextPage<PageProps> = ({ children }) => {
  return (
    <div>
      <Header />
      <h2>I am the page component</h2>
      <h3></h3>
      {children}
    </div>
  );
};

export default Page;
