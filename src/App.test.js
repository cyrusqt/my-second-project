import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the navbar logo', () => {
  render(<App />);
  const logoElement = screen.getByText(/prtflio/i);
  expect(logoElement).toBeInTheDocument();
});
