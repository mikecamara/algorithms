import { render, screen } from '@testing-library/react';
import App from './App';

test('All good you still having fun', () => {
  render(<App />);
  const linkElement = screen.getByText(/Having fun with algorithms/i);
  expect(linkElement).toBeInTheDocument();
});
