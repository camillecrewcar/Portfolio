import buildTrack from './buildTrack';

test('places one space per topic on the track', () => {
  const track = buildTrack(560, 10);
  expect(track.spaces).toHaveLength(10);
});

test('START and FINISH are the two ends of the path', () => {
  const track = buildTrack(560, 10);
  expect(track.start).toEqual({ x: 64 + 76, y: 66 });
  expect(track.d.startsWith(`M ${track.start.x} ${track.start.y}`)).toBe(true);
  expect(track.finish.y).toBeGreaterThan(track.start.y);
});

test('uses a taller, four-run layout on narrow boards', () => {
  const wide = buildTrack(560, 10);
  const narrow = buildTrack(340, 10);
  expect(narrow.compact).toBe(true);
  expect(wide.compact).toBe(false);
  expect(narrow.height).toBeGreaterThan(wide.height);
});
