import { render, screen, fireEvent } from '@testing-library/react';
import { ContentA } from './ContentA';

describe('ContentA Component Tests', () => {
  // Normal Case 1: Component renders
  test('renders ContentA component', () => {
    render(<ContentA />);
    const heading = screen.getByText(/Content A Component/i);
    expect(heading).toBeInTheDocument();
  });

  // Normal Case 2: Counter starts at 0
  test('counter starts at 0', () => {
    render(<ContentA />);
    const counter = screen.getByText(/Click counter:/i);
    expect(counter).toHaveTextContent('0');
  });

  // Normal Case 3: Increment button works
  test('increment button increases counter', () => {
    render(<ContentA />);
    const incrementButton = screen.getByText(/Increment Count/i);
    
    fireEvent.click(incrementButton);
    expect(screen.getByText(/Click counter:/i)).toHaveTextContent('1');
    
    fireEvent.click(incrementButton);
    expect(screen.getByText(/Click counter:/i)).toHaveTextContent('2');
  });

  // Edge Case 1: Multiple rapid clicks
  test('handles multiple rapid clicks', () => {
    render(<ContentA />);
    const incrementButton = screen.getByText(/Increment Count/i);
    
    // Click 10 times rapidly
    for (let i = 0; i < 10; i++) {
      fireEvent.click(incrementButton);
    }
    
    expect(screen.getByText(/Click counter:/i)).toHaveTextContent('10');
  });

  // Edge Case 2: Reset button works
  test('reset button sets counter back to 0', () => {
    render(<ContentA />);
    const incrementButton = screen.getByText(/Increment Count/i);
    const resetButton = screen.getByText(/Reset/i);
    
    // Increment to 5
    for (let i = 0; i < 5; i++) {
      fireEvent.click(incrementButton);
    }
    
    // Reset
    fireEvent.click(resetButton);
    expect(screen.getByText(/Click counter:/i)).toHaveTextContent('0');
  });

  // Edge Case 3: Reset when already at 0
  test('reset button works when counter is already 0', () => {
    render(<ContentA />);
    const resetButton = screen.getByText(/Reset/i);
    
    fireEvent.click(resetButton);
    expect(screen.getByText(/Click counter:/i)).toHaveTextContent('0');
  });
});