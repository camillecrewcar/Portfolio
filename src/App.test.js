import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the greeting and the board', () => {
  render(<App />);
  expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Kamil Krukar');
  expect(screen.getByRole('button', { name: 'Roll the dice' })).toBeInTheDocument();
});
