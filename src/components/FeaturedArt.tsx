"use client";

import "../app/global.css"
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";


export default function FeaturedArt(){
    return (
    <section>
    <div>
        <img
        src="images/sera.webp"
        alt="Sera art"
        className=""
        ></img>
    </div>
    
    <div className="top-[40px] z-5">
        <img
        src="assets/feat_art_namecard.png"
        className=""
        ></img>
    </div>
    </section>
)
}