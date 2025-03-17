"use client";

import React from "react";
import dynamic from "next/dynamic";
import { ArrowUpToLine } from "lucide-react";

const BackToUp = dynamic(() => import("@uiw/react-back-to-top"), {
  ssr: false,
});

function Totop() {
  return (
    <>
      <BackToUp size={50}>
        <ArrowUpToLine />
      </BackToUp>
    </>
  );
}

export default Totop;
