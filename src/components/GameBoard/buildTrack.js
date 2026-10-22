// Builds a winding S-shaped track: straight runs joined by half-circle turns.
// Everything is in real pixels so labels keep a readable size on any screen.
const buildTrack = (width, count) => {
  const compact = width < 420;
  // Medium boards (narrow desktop column) use smaller spaces so labels don't collide
  const medium = !compact && width < 540;
  const runs = compact ? 4 : 3;
  const margin = compact ? 46 : medium ? 54 : 64;
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
    medium,
    height: top + 2 * r * (runs - 1) + bottom,
    d: `M ${x0} ${top} ${path}`,
    start: pointAt(0),
    finish: pointAt(total),
    spaces,
  };
};

export default buildTrack;
