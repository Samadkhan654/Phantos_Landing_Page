import * as React from 'react';

interface PhantosLogoProps {
  className?: string;
  size?: number | string;
}

export function PhantosLogo({ className = '', size = 32 }: PhantosLogoProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`${className}`}
    >
      <defs>
        {/* Glow & Color gradients matching the cyber eye */}
        <linearGradient id="eyeGlowGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#A5B4FC" /> {/* Light Indigo */}
          <stop offset="40%" stopColor="#6366F1" />  {/* Electric Blue/Indigo */}
          <stop offset="100%" stopColor="#4338CA" /> {/* Deep Cyber Blue */}
        </linearGradient>
        
        <filter id="cyberNeonGlow" x="-30%" y="-30%" width="160%" height="160%">
          <feGaussianBlur stdDeviation="3" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Outer circuit path lines shaping the cyber eye */}
      <g filter="url(#cyberNeonGlow)">
        {/* Upper Outer Eyelid Track with circuit nodes */}
        <path
          d="M 15 60 C 25 35, 45 28, 60 28 C 75 28, 95 35, 105 60"
          stroke="url(#eyeGlowGrad)"
          strokeWidth="3"
          strokeLinecap="round"
          opacity="0.95"
        />
        {/* Upper Inner Eyelid Track */}
        <path
          d="M 22 60 C 30 42, 45 35, 60 35 C 75 35, 90 42, 98 60"
          stroke="url(#eyeGlowGrad)"
          strokeWidth="2"
          strokeLinecap="round"
          strokeDasharray="18 4 10 4"
          opacity="0.85"
        />

        {/* Lower Outer Eyelid Track */}
        <path
          d="M 15 60 C 25 85, 45 92, 60 92 C 75 92, 95 85, 105 60"
          stroke="url(#eyeGlowGrad)"
          strokeWidth="3"
          strokeLinecap="round"
          opacity="0.95"
         />
        {/* Lower Inner Eyelid Track */}
        <path
          d="M 22 60 C 30 78, 45 85, 60 85 C 75 85, 90 78, 98 60"
          stroke="url(#eyeGlowGrad)"
          strokeWidth="2"
          strokeLinecap="round"
          strokeDasharray="10 4 20 4"
          opacity="0.85"
        />

        {/* --- Cyber Circuit Track / Junction Details --- */}
        {/* Left Eyelid PCB tracks & dots */}
        <path d="M 12 60 L 22 60" stroke="#818CF8" strokeWidth="2.5" strokeLinecap="round" />
        
        {/* Branch 1: Inward & Up */}
        <path d="M 22 60 L 32 50 L 38 50" stroke="#818CF8" strokeWidth="2.5" strokeLinecap="round" />
        <circle cx="38" cy="50" r="2" fill="#E0E7FF" />

        {/* Branch 2: Inward & Down */}
        <path d="M 22 60 L 28 66 L 35 66" stroke="#818CF8" strokeWidth="2.5" strokeLinecap="round" />
        <circle cx="35" cy="66" r="2" fill="#E0E7FF" />

        <circle cx="28" cy="42" r="2" fill="#818CF8" />
        <circle cx="34" cy="38" r="2" fill="#818CF8" />

        {/* Right Eyelid PCB tracks & dots */}
        <path d="M 108 60 L 98 60" stroke="#818CF8" strokeWidth="2.5" strokeLinecap="round" />
        
        {/* Branch 3: Inward & Up */}
        <path d="M 98 60 L 88 50 L 82 50" stroke="#818CF8" strokeWidth="2.5" strokeLinecap="round" />
        <circle cx="82" cy="50" r="2" fill="#E0E7FF" />

        {/* Branch 4: Inward & Down */}
        <path d="M 98 60 L 92 66 L 85 66" stroke="#818CF8" strokeWidth="2.5" strokeLinecap="round" />
        <circle cx="85" cy="66" r="2" fill="#E0E7FF" />

        {/* Additional circuit nodes around curves */}
        <circle cx="92" cy="42" r="2" fill="#818CF8" />
        <circle cx="86" cy="38" r="2" fill="#818CF8" />


        {/* --- Central Eyeball & Glowing Iris (Cyber Core) --- */}
        <circle cx="60" cy="60" r="22" stroke="url(#eyeGlowGrad)" strokeWidth="3" />
        <circle cx="60" cy="60" r="18" stroke="#4F46E5" strokeWidth="1" opacity="0.6" />

        {/* Bottom concentric wave curves (radar/sonar pattern) */}
        <path
          d="M 44 65 C 48 72, 54 75, 60 75 C 66 75, 72 72, 76 65"
          stroke="#818CF8"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M 48 69 C 51 74, 55 77, 60 77 C 65 77, 69 74, 72 69"
          stroke="#6366F1"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path
          d="M 52 73 C 54 76, 57 78, 60 78 C 63 78, 66 76, 68 73"
          stroke="#4F46E5"
          strokeWidth="1.2"
          strokeLinecap="round"
        />

        {/* Central Pupil / 'C' spiral / glowing core */}
        <g transform="translate(60, 52)">
          {/* Outer Ring of Pupil */}
          <circle cx="0" cy="0" r="7" stroke="#A5B4FC" strokeWidth="1.5" />
          
          {/* Inner spiral-like C core */}
          <path
            d="M 2 -4 A 4.5 4.5 0 1 0 -1.5 3 C -1.5 3, 2.5 1, 0.5 -1.5 C -0.8 -2.4, -3.2 -0.8, -2.5 1.5"
            stroke="#EEF2FF"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          {/* Highlight glare dot */}
          <circle cx="3" cy="-3" r="2" fill="#FFFFFF" />
        </g>
      </g>
    </svg>
  );
}
