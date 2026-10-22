import React from 'react';

// `hop` changes on every step, which remounts the body and replays the hop animation
const Pawn = ({ left, top, hop, onMarker }) => (
  <div className={`pawn${onMarker ? ' on-marker' : ''}`} style={{ left, top }}>
    <div key={hop} className={`pawn-body${hop ? ' hop' : ''}`}>
      <svg viewBox="0 0 40 54" aria-hidden="true">
        <defs>
          <linearGradient id="pawn-fill" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#4a4950" />
            <stop offset="100%" stopColor="#111114" />
          </linearGradient>
        </defs>
        <ellipse cx="20" cy="48" rx="17" ry="5.5" fill="url(#pawn-fill)" />
        <path d="M7 47 C8 38 14 34 15 26 L25 26 C26 34 32 38 33 47 Z" fill="url(#pawn-fill)" />
        <rect x="11" y="22" width="18" height="5.5" rx="2.75" fill="url(#pawn-fill)" />
        <circle cx="20" cy="13" r="10" fill="url(#pawn-fill)" />
        <circle cx="16.5" cy="9.5" r="3" fill="#ffffff" opacity="0.25" />
      </svg>
    </div>
  </div>
);

export default Pawn;
