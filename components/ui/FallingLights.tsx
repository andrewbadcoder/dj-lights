"use client";

import { motion } from "framer-motion";

export default function FallingLights() {
  return (
    <div className="absolute inset-0 pointer-events-none z-40 overflow-hidden">
      <motion.div
        initial={{ y: -300 }}
        animate={{ y: -120 }} 
        transition={{ 
          type: "spring", 
          stiffness: 40,
          damping: 12,
          mass: 2,
          delay: 0.5 
        }}
        className="w-full h-full flex justify-center"
      >
        <svg
          viewBox="0 0 1200 300"
          className="w-full h-auto min-w-[800px] opacity-90"
          preserveAspectRatio="none"
        >
          <path
            d="M0,0 Q300,250 600,0 Q900,250 1200,0"
            fill="none"
            stroke="#1a1a1a"
            strokeWidth="3"
          />

          {/* UPDATES MADE:
             1. <rect> (socket) is now listed BEFORE <circle> (bulb) so the bulb sits on top.
             2. Removed 'animate-pulse' class from all circles.
          */}
          
          {/* -- LEFT LOOP -- */}
          {/* Bulb 1 (High Left) */}
          <g transform="translate(150, 110)">
            <rect x="-3" y="-17" width="6" height="20" fill="#1a1a1a" />
            <circle cx="0" cy="7" r="12" fill="#ef4444" />
          </g>

          {/* Bulb 2 (Low Center-Left) */}
          <g transform="translate(300, 150)">
            <rect x="-3" y="-25" width="6" height="20" fill="#1a1a1a" />
            <circle cx="0" cy="0" r="12" fill="#22c55e" />
          </g>

          {/* Bulb 3 (High Right-Left) */}
          <g transform="translate(450, 110)">
            <rect x="-3" y="-17" width="6" height="20" fill="#1a1a1a" />
            <circle cx="0" cy="7" r="12" fill="#fbbf24" />
          </g>

           {/* -- MIDDLE PIN (Red) -- */}
           <g transform="translate(600, 10)">
            <rect x="-3" y="-20" width="6" height="20" fill="#1a1a1a" />
            <circle cx="0" cy="0" r="12" fill="#ef4444" />
          </g>

          {/* -- RIGHT LOOP -- */}
          {/* Bulb 4 (High Left-Right) */}
          <g transform="translate(750, 110)">
            <rect x="-3" y="-17" width="6" height="20" fill="#1a1a1a" />
            <circle cx="0" cy="7" r="12" fill="#22c55e" />
          </g>

          {/* Bulb 5 (Low Center-Right) */}
          <g transform="translate(900, 150)">
            <rect x="-3" y="-25" width="6" height="20" fill="#1a1a1a" />
            <circle cx="0" cy="0" r="12" fill="#fbbf24" />
          </g>

           {/* Bulb 6 (High Right) */}
           <g transform="translate(1050, 110)">
            <rect x="-3" y="-17" width="6" height="20" fill="#1a1a1a" />
            <circle cx="0" cy="7" r="12" fill="#ef4444" />
          </g>
        </svg>
      </motion.div>
    </div>
  );
}