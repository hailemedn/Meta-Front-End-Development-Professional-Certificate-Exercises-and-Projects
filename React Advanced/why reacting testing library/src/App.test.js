import { render, screen } from '@testing-library/react';
import App from './App';

test("renders a link that point to the page", () => {
  render(<App />);
  const linkElement = screen.getByText("little lemon restaurant");
  expect(linkElement).toBeInTheDocument();
});
