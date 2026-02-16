import { render, screen, fireEvent } from '@testing-library/react';
import { ContentB } from './ContentB';

describe('ContentB Component Tests', () => {
  // Normal Case 1: Component renders
  test('renders ContentB component', () => {
    render(<ContentB />);
    const heading = screen.getByText(/Content B Component/i);
    expect(heading).toBeInTheDocument();
  });

  // Normal Case 2: Initial message displays
  test('displays initial message', () => {
    render(<ContentB />);
    const message = screen.getByText(/Click a button to change this message!/i);
    expect(message).toBeInTheDocument();
  });

  // Normal Case 3: Hello button changes message
  test('say hello button changes message', () => {
    render(<ContentB />);
    const helloButton = screen.getByText(/Say Hello/i);
    
    fireEvent.click(helloButton);
    expect(screen.getByText(/Hello from ContentB!/i)).toBeInTheDocument();
  });

  // Edge Case 1: Goodbye button changes message
  test('say goodbye button changes message', () => {
    render(<ContentB />);
    const goodbyeButton = screen.getByText(/Say Goodbye/i);
    
    fireEvent.click(goodbyeButton);
    expect(screen.getByText(/Goodbye from ContentB!/i)).toBeInTheDocument();
  });

  // Edge Case 2: Can switch between messages
  test('can switch between hello and goodbye', () => {
    render(<ContentB />);
    const helloButton = screen.getByText(/Say Hello/i);
    const goodbyeButton = screen.getByText(/Say Goodbye/i);
    
    fireEvent.click(helloButton);
    expect(screen.getByText(/Hello from ContentB!/i)).toBeInTheDocument();
    
    fireEvent.click(goodbyeButton);
    expect(screen.getByText(/Goodbye from ContentB!/i)).toBeInTheDocument();
  });

  // Edge Case 3: Multiple clicks on same button
  test('clicking same button multiple times keeps same message', () => {
    render(<ContentB />);
    const helloButton = screen.getByText(/Say Hello/i);
    
    fireEvent.click(helloButton);
    fireEvent.click(helloButton);
    fireEvent.click(helloButton);
    
    expect(screen.getByText(/Hello from ContentB!/i)).toBeInTheDocument();
  });
});
