import React, { useEffect } from "react";
import Head from "next/head";
import Navbar from "@/components/Navbar";
import Backdrop3d from "@/components/Backdrop3d";
import { Analytics } from "@vercel/analytics/react";
import Lenis from "lenis";
import PixelGrid from "@/components/PixelGrid";

const Layout = ({ children }) => {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: "vertical",
      smooth: true,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div className="relative text-foreground">
      <Head>
        <title>Saif Anees | Portfolio</title>
        <link rel="icon" type="image/x-icon" href="/pfp.jpg" />
      </Head>
      {/* <PixelGrid /> */}
      <Navbar />
      <Backdrop3d />
      <div>{children}</div>
      <Analytics />
    </div>
  );
};

export default Layout;
