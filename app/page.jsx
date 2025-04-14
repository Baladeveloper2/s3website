
"use client";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "@fortawesome/fontawesome-svg-core/styles.css"; // Prevent fontawesome CSS conflicts

library.add(fab);
import Image from "next/image";
import Link from "next/link";

import Navbar from "./components/Navbar";
export default function Home() {
  return (
    <div>
 <Navbar/>
    </div>
  
  );
}
