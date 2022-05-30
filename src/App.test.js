import { render, screen } from '@testing-library/react';
import App from './App';

test('renders heading', () => {
  render(<App />);
  const h1Element = screen.getByText(/Boat Tracker/i);
  expect(h1Element).toBeInTheDocument();
});
