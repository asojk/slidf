"use client";
import { navlinks } from "@/constants/navlinks";
import { Navlink } from "@/types/navlink";
import Image from "next/image";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import React, { useState } from "react";
import { twMerge } from "tailwind-merge";
import { Heading } from "./Heading";
import { socials } from "@/constants/socials";
import { Badge } from "./Badge";
import { AnimatePresence, motion } from "framer-motion";
import { IconLayoutSidebarRightCollapse } from "@tabler/icons-react";
import { isMobile } from "../lib/utils";


export const Profile = () => {
    return (
      <div className="flex space-x-2">
        <Image
          src='https://atsport.s3.us-east-2.amazonaws.com/Hillary.webp'
          alt="Avatar"
          height="60"
          width="60"
          className="object-cover object-top rounded-full flex-shrink-0"
        />
        <div className="flex text-sm flex-col">
          <p className="font-bold text-primary pt-2">Hillary Hamilton</p>
          <p className="font-light text-secondary pb-4">Professional Title?</p>
          <div className='md:hidden md:p-0 pl-12'>
          <Badge href="/resume" text="Read Resume" />
          </div>
        </div>
      </div>
    );
  };
