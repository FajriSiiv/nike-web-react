import React from "react";
import Nav from "../components/Nav";
import { Footer } from "../section";

const Layout = ({ children }) => {
  return (
    <div className="relative">
      <Nav />
      {children}
      <section className="bg-black padding-x padding-t pb-8">
        <Footer />
      </section>
    </div>
  );
};

export default Layout;
