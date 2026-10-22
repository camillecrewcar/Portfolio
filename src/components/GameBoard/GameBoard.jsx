import React, { useState, useEffect, useRef } from 'react';
import Dice from './Dice';
import Pawn from './Pawn';
import '../ComponentStyles/board.css';

// Builds a winding S-shaped track: straight runs joined by half-circle turns.
// Everything is in real pixels so labels keep a readable size on any screen.
const buildTrack = (width, count) => {
  const compact = width < 500;
  const runs = compact ? 4 : 3;
  const margin = compact ? 46 : 64;
  const r = compact ? 58 : 76;
  const top = compact ? 52 : 66;
  const bottom = compact ? 58 : 74;
  const x0 = margin + r;
  const x1 = width - margin - r;
  const lineLength = x1 - x0;

  const segments = [];
  for (let k = 0; k < runs; k++) {
    const y = top + 2 * r * k;
    const leftToRight = k % 2 === 0;
    segments.push({ type: 'line', from: leftToRight ? x0 : x1, to: leftToRight ? x1 : x0, y });
    if (k < runs - 1) {
      segments.push({ type: 'arc', cx: leftToRight ? x1 : x0, cy: y + r, side: leftToRight ? 1 : -1 });
    }
  }

  const segmentLength = (seg) => (seg.type === 'line' ? lineLength : Math.PI * r);
  const total = segments.reduce((sum, seg) => sum + segmentLength(seg), 0);

  const pointAt = (distance) => {
    let s = distance;
    for (const seg of segments) {
      const len = segmentLength(seg);
      if (s <= len) {
        if (seg.type === 'line') {
          return { x: seg.from + ((seg.to - seg.from) * s) / len, y: seg.y };
        }
        const angle = s / r;
        return { x: seg.cx + seg.side * r * Math.sin(angle), y: seg.cy - r * Math.cos(angle) };
      }
      s -= len;
    }
    const last = segments[segments.length - 1];
    return { x: last.to, y: last.y };
  };

  const path = segments
    .map((seg) =>
      seg.type === 'line'
        ? `L ${seg.to} ${seg.y}`
        : `A ${r} ${r} 0 0 ${seg.side === 1 ? 1 : 0} ${seg.cx} ${seg.cy + r}`
    )
    .join(' ');

  // Spaces are spread evenly between START and FINISH
  const spaces = Array.from({ length: count }, (_, i) => pointAt((total * (i + 1)) / (count + 1)));

  return {
    compact,
    height: top + 2 * r * (runs - 1) + bottom,
    d: `M ${x0} ${top} ${path}`,
    start: pointAt(0),
    finish: pointAt(total),
    spaces,
  };
};

const GameBoard = ({ topics, pawnPos, activeTopic, hop, busy, rollRef, onSelect, onRollStart, onRoll, text }) => {
  const [width, setWidth] = useState(560);
  const surfaceRef = useRef(null);

  useEffect(() => {
    const el = surfaceRef.current;
    if (!el || typeof ResizeObserver === 'undefined') return;
    const observer = new ResizeObserver(() => setWidth(el.clientWidth));
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const track = buildTrack(width, topics.length);
  // Position 0 is the START marker
  const pawn = pawnPos === 0 ? track.start : track.spaces[pawnPos - 1];

  return (
    <div className={`board-frame${track.compact ? ' compact' : ''}`}>
      <div className="board-surface" ref={surfaceRef} style={{ height: track.height }}>
        <svg className="board-track" width={width} height={track.height} aria-hidden="true">
          <path className="track-edge" d={track.d} />
          <path className="track-road" d={track.d} />
          <path className="track-line" d={track.d} />
        </svg>

        <button
          type="button"
          className={`track-marker start${activeTopic === 0 ? ' active' : ''}`}
          style={{ left: track.start.x, top: track.start.y }}
          onClick={() => onSelect(0)}
        >
          {text.start}
        </button>
        <span className="track-marker finish" style={{ left: track.finish.x, top: track.finish.y }}>
          {text.finish}
        </span>

        {topics.map((topic, index) => {
          const { x, y } = track.spaces[index];
          const isActive = topic.id === activeTopic;

          return (
            <button
              key={topic.id}
              type="button"
              className={`space${isActive ? ' active' : ''}`}
              style={{ left: x, top: y, '--space-color': topic.color }}
              onClick={() => onSelect(topic.id)}
              aria-current={isActive ? 'true' : undefined}
            >
              <span className="space-disc">{topic.id}</span>
              <span className="space-label">{topic.name}</span>
            </button>
          );
        })}

        <Pawn left={pawn.x} top={pawn.y} hop={hop} />
      </div>

      <div className="board-tray">
        <Dice disabled={busy} rollRef={rollRef} onRollStart={onRollStart} onResult={onRoll} label={text.roll} />
        <div className="board-tray-text">
          <strong>{text.roll}</strong>
          <span>{text.hint}</span>
        </div>
      </div>
    </div>
  );
};

export default GameBoard;
