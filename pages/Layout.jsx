import React from "react";
import Head from "next/head";
import Navbar from "@/components/Navbar";
import Backdrop3d from "@/components/Backdrop3d";

const Layout = ({ children }) => {
  return (
    <div className="relative text-foreground">
      <Head>
        <title>Saif Anees | Portfolio</title>
        <link rel="icon" type="image/x-icon" href="/pfp.jpg" />
      </Head>
      <Navbar />
      <Backdrop3d />
      <div>{children}</div>
    </div>
  );
};

export default Layout;
