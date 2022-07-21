import { NextPage } from "next";
import React from "react";

interface PageProps {
  children: React.ReactNode;
}

const Page: NextPage<PageProps> = ({ children }) => {
  return (
    <div>
      <h2>I am the page component</h2>
      {children}
    </div>
  );
};

export default Page;
