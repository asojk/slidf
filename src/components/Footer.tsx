"use client";
import React from "react";

export const Footer = () => {
  return (
    <div className="p-4 text-center justify-center text-xs text-neutral-500 border-t border-neutral-100">
    Built by <a className='italic text-violet-500' href='https://selynt.com'>Selynt.com</a><span className="pl-1">{new Date().getFullYear()} </span>
    </div>
  );
};
