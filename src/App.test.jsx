/* global describe, it, expect, vi, afterEach */
import { render, screen, fireEvent, cleanup } from '@testing-library/react';
import React from 'react';
import App from './App';
import { SCAFFOLD_COMMAND } from './constants';

afterEach(cleanup);

describe('App', () => {
  it('renders the project name as the page title', () => {
    render(<App />);
    expect(
      screen.getByRole('heading', {
        level: 1,
        name: 'vite-react-tailwind-lint',
      })
    ).toBeTruthy();
  });

  it('renders the hero pitch and the scaffold command', () => {
    render(<App />);
    expect(
      screen.getByRole('heading', {
        level: 2,
        name: 'Vite + React + Tailwind',
      })
    ).toBeTruthy();
    expect(screen.getByText(SCAFFOLD_COMMAND)).toBeTruthy();
  });

  it('renders the lazy-loaded stack and scripts sections', async () => {
    render(<App />);
    expect(await screen.findByText('Tailwind CSS')).toBeTruthy();
    expect(await screen.findByText('npm run release:check')).toBeTruthy();
  });

  it('copies the command and confirms it', async () => {
    const writeText = vi.fn().mockResolvedValue(undefined);
    vi.stubGlobal('navigator', { ...navigator, clipboard: { writeText } });

    render(<App />);
    fireEvent.click(screen.getByRole('button', { name: 'Copy' }));

    expect(await screen.findByText('Copied to clipboard')).toBeTruthy();
    expect(writeText).toHaveBeenCalledWith(SCAFFOLD_COMMAND);
    expect(screen.getByRole('button', { name: 'Copied' })).toBeTruthy();

    vi.unstubAllGlobals();
  });

  it('falls back to selecting the command when the clipboard is blocked', async () => {
    vi.stubGlobal('navigator', { ...navigator, clipboard: undefined });
    const execCommand = vi.fn().mockReturnValue(false);
    document.execCommand = execCommand;

    render(<App />);
    fireEvent.click(screen.getByRole('button', { name: 'Copy' }));

    expect(await screen.findByText(/press (Ctrl|Cmd)\+C/)).toBeTruthy();
    expect(execCommand).toHaveBeenCalledWith('copy');
    expect(window.getSelection().toString()).toContain('npx degit');

    vi.unstubAllGlobals();
  });
});
