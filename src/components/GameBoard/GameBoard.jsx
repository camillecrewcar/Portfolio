import React, { useState, useEffect, useRef } from 'react';
import Dice from '../Dice/Dice';
import Pawn from './Pawn';
import buildTrack from './buildTrack';
import { START } from '../../constants/game';
import './GameBoard.css';

const GameBoard = ({
  topics,
  pawnPosition,
  activePosition,
  hop,
  busy,
  lastRoll,
  rollRef,
  onSelect,
  onRollStart,
  onRoll,
  text,
}) => {
  const [width, setWidth] = useState(560);
  const surfaceRef = useRef(null);

  useEffect(() => {
    const el = surfaceRef.current;
    if (!el || typeof ResizeObserver === 'undefined') return undefined;
    const observer = new ResizeObserver(() => setWidth(el.clientWidth));
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const finish = topics.length + 1;
  const track = buildTrack(width, topics.length);
  const onMarker = pawnPosition === START || pawnPosition === finish;
  const pawn =
    pawnPosition === START ? track.start : pawnPosition === finish ? track.finish : track.spaces[pawnPosition - 1];

  return (
    <div className={`board-frame${track.compact ? ' compact' : ''}${track.medium ? ' medium' : ''}`}>
      <div className="board-surface" ref={surfaceRef} style={{ height: track.height }}>
        <svg className="board-track" width={width} height={track.height} aria-hidden="true">
          <path className="track-edge" d={track.d} />
          <path className="track-road" d={track.d} />
          <path className="track-line" d={track.d} />
        </svg>

        <button
          type="button"
          className={`track-marker start${activePosition === START ? ' active' : ''}`}
          style={{ left: track.start.x, top: track.start.y }}
          onClick={() => onSelect(START)}
        >
          {text.start}
        </button>
        <button
          type="button"
          className={`track-marker finish${activePosition === finish ? ' active' : ''}`}
          style={{ left: track.finish.x, top: track.finish.y }}
          onClick={() => onSelect(finish)}
        >
          {text.finish}
        </button>

        {topics.map((topic, index) => {
          const { x, y } = track.spaces[index];
          const isActive = topic.id === activePosition;

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

        <Pawn left={pawn.x} top={pawn.y} hop={hop} onMarker={onMarker} />
      </div>

      <div className="board-tray">
        <Dice disabled={busy} rollRef={rollRef} onRollStart={onRollStart} onResult={onRoll} label={text.roll} />
        <div className="board-tray-text">
          <strong>{text.roll}</strong>
          {lastRoll ? (
            <span className="dice-result">
              {text.rolled} <b>{lastRoll}</b>
            </span>
          ) : (
            <span>{text.hint}</span>
          )}
        </div>
      </div>
    </div>
  );
};

export default GameBoard;
