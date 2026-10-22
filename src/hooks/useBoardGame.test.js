import { renderHook, act } from '@testing-library/react';
import useBoardGame from './useBoardGame';
import { START } from '../constants/game';

const TOPICS = 10;
const FINISH = TOPICS + 1;

beforeEach(() => jest.useFakeTimers());
afterEach(() => jest.useRealTimers());

// Rolls the die and lets the pawn finish walking
const roll = (result, value) => {
  act(() => result.current.startRoll());
  act(() => result.current.walk(value));
  act(() => jest.runAllTimers());
};

test('starts on START', () => {
  const { result } = renderHook(() => useBoardGame(TOPICS));
  expect(result.current.pawnPosition).toBe(START);
  expect(result.current.activePosition).toBe(START);
});

test('a roll moves the pawn that many spaces and shows the topic when it lands', () => {
  const { result } = renderHook(() => useBoardGame(TOPICS));
  roll(result, 4);
  expect(result.current.pawnPosition).toBe(4);
  expect(result.current.activePosition).toBe(4);
  expect(result.current.lastRoll).toBe(4);
  expect(result.current.busy).toBe(false);
});

test('reaching FINISH ends the move, and the next roll walks back', () => {
  const { result } = renderHook(() => useBoardGame(TOPICS));
  act(() => result.current.jumpTo(9));
  act(() => jest.runAllTimers());

  roll(result, 6);
  expect(result.current.activePosition).toBe(FINISH);

  roll(result, 3);
  expect(result.current.activePosition).toBe(FINISH - 3);
});

test('walking back turns around at space 1', () => {
  const { result } = renderHook(() => useBoardGame(TOPICS));
  act(() => result.current.jumpTo(FINISH));
  act(() => jest.runAllTimers());
  act(() => result.current.jumpTo(3));
  act(() => jest.runAllTimers());

  // Heading back from FINISH: 3 -> 2 -> 1, then forward to 2 and 3
  roll(result, 4);
  expect(result.current.activePosition).toBe(3);
});

test('picking a space hides the last dice result', () => {
  const { result } = renderHook(() => useBoardGame(TOPICS));
  roll(result, 2);
  expect(result.current.lastRoll).toBe(2);

  act(() => result.current.jumpTo(5));
  expect(result.current.lastRoll).toBe(null);
});
