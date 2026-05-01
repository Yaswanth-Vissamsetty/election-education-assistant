import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Chat from '../components/Chat';

describe('Chat Component', () => {
  it('renders initial bot message', () => {
    render(<Chat />);
    expect(screen.getByText(/Hello! I'm your Indian Election Assistant/i)).toBeInTheDocument();
  });

  it('responds to user query about registration', async () => {
    render(<Chat />);
    const input = screen.getByPlaceholderText(/Type your question.../i);
    const sendBtn = screen.getByRole('button', { name: '' }); // The one with the Send icon

    fireEvent.change(input, { target: { value: 'How to register?' } });
    fireEvent.click(sendBtn);

    expect(screen.getByText('How to register?')).toBeInTheDocument();

    await waitFor(() => {
      expect(screen.getByText(/To register to vote in India, you need to fill out Form 6/i)).toBeInTheDocument();
    }, { timeout: 1000 });
  });

  it('shows default response for unknown query', async () => {
    render(<Chat />);
    const input = screen.getByPlaceholderText(/Type your question.../i);
    const sendBtn = screen.getByRole('button', { name: '' });

    fireEvent.change(input, { target: { value: 'random question' } });
    fireEvent.click(sendBtn);

    await waitFor(() => {
      expect(screen.getByText(/I'm your AI Election Assistant! I can help you understand/i)).toBeInTheDocument();
    }, { timeout: 1000 });
  });
});
