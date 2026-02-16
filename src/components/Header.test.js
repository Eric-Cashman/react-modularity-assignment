import { render, screen } from '@testing-library/react';
import Header from './Header';

describe('Header Component Tests', () => {
  // Normal Case 1: Component renders
  test('renders Header component', () => {
    render(<Header />);
    const heading = screen.getByText(/React Modularity Assignment/i);
    expect(heading).toBeInTheDocument();
  });

  // Normal Case 2: Displays subtitle
  test('displays subtitle text', () => {
    render(<Header />);
    const subtitle = screen.getByText(/Demonstrating Default and Named Exports/i);
    expect(subtitle).toBeInTheDocument();
  });

  // Normal Case 3: Has header element
  test('renders as header element', () => {
    const { container } = render(<Header />);
    const header = container.querySelector('header');
    expect(header).toBeInTheDocument();
  });
});