import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Quiz from '../components/Quiz';

describe('Quiz Component', () => {
  it('renders the first flashcard initially', () => {
    render(<Quiz />);
    expect(screen.getByText(/Question 1 of 5/i)).toBeInTheDocument();
    expect(screen.getByText(/What is the minimum voting age in India?/i)).toBeInTheDocument();
  });

  it('flips the card when clicked', () => {
    render(<Quiz />);
    const card = screen.getByText(/What is the minimum voting age in India?/i).closest('.flashcard');
    fireEvent.click(card);
    expect(card).toHaveClass('flipped');
    expect(screen.getByText(/18 years/i)).toBeInTheDocument();
  });

  it('navigates to the next question', async () => {
    render(<Quiz />);
    const nextBtn = screen.getByRole('button', { name: /Next Question/i });
    fireEvent.click(nextBtn);
    
    // We wait for the timeout in the component
    await new Promise(resolve => setTimeout(resolve, 200));
    
    expect(screen.getByText(/Question 2 of 5/i)).toBeInTheDocument();
    expect(screen.getByText(/What does VVPAT stand for?/i)).toBeInTheDocument();
  });
});
