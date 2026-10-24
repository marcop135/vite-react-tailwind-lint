/* global describe, it, expect, vi, afterEach */
import { render, screen, fireEvent, cleanup } from '@testing-library/react';
import React from 'react';
import App from './App';
import { QUICKSTART, REPO_URL, VERSIONS } from './constants';

afterEach(() => {
  cleanup();
  vi.unstubAllGlobals();
  window.history.replaceState(null, '', '/');
});

const [CLONE] = QUICKSTART;

describe('App', () => {
  it('renders the name and the value line as the only h1', () => {
    render(<App />);
    const headings = screen.getAllByRole('heading', { level: 1 });
    expect(headings).toHaveLength(1);
    expect(headings[0].textContent).toBe(
      'Revitail: Start fresh. Revitalize your next React project.'
    );
  });

  it('renders every quick start command', () => {
    render(<App />);
    for (const line of QUICKSTART) {
      expect(screen.getAllByText(line).length).toBeGreaterThan(0);
    }
  });

  it('shows versions resolved from the lockfile', async () => {
    render(<App />);
    expect(VERSIONS.vite).toMatch(/^\d+\.\d+\.\d+/);
    expect(await screen.findByText('What is wired in')).toBeTruthy();
    expect(screen.getAllByText(VERSIONS.vite).length).toBeGreaterThan(0);
  });

  it('renders the lazy-loaded pipeline and scripts sections', async () => {
    render(<App />);
    expect(await screen.findByText('From save to release')).toBeTruthy();
    expect(await screen.findByText('npm run release:check')).toBeTruthy();
  });

  it('closes with a link to the repo', async () => {
    render(<App />);
    expect(
      await screen.findByRole('heading', {
        name: 'Start your next app on Revitail',
      })
    ).toBeTruthy();
    expect(
      screen
        .getByRole('link', { name: 'Get it on GitHub' })
        .getAttribute('href')
    ).toBe(REPO_URL);
  });

  it('copies one command and confirms it', async () => {
    const writeText = vi.fn().mockResolvedValue(undefined);
    vi.stubGlobal('navigator', { ...navigator, clipboard: { writeText } });

    render(<App />);
    fireEvent.click(screen.getByRole('button', { name: `Copy: ${CLONE}` }));

    expect(await screen.findByText('Copied to clipboard')).toBeTruthy();
    expect(writeText).toHaveBeenCalledWith(CLONE);
    expect(
      screen.getByRole('button', { name: `Copied: ${CLONE}` })
    ).toBeTruthy();
  });

  it('copies all commands at once', async () => {
    const writeText = vi.fn().mockResolvedValue(undefined);
    vi.stubGlobal('navigator', { ...navigator, clipboard: { writeText } });

    render(<App />);
    fireEvent.click(screen.getByRole('button', { name: 'Copy all' }));

    expect(await screen.findByText('Copied all')).toBeTruthy();
    expect(writeText).toHaveBeenCalledWith(QUICKSTART.join('\n'));
  });

  it('falls back to selecting the command when the clipboard is blocked', async () => {
    vi.stubGlobal('navigator', { ...navigator, clipboard: undefined });
    const execCommand = vi.fn().mockReturnValue(false);
    document.execCommand = execCommand;

    render(<App />);
    fireEvent.click(screen.getByRole('button', { name: `Copy: ${CLONE}` }));

    expect(await screen.findByText(/press (Ctrl|Cmd)\+C/)).toBeTruthy();
    expect(execCommand).toHaveBeenCalledWith('copy');
    expect(window.getSelection().toString()).toContain('git clone');
  });

  it('overrides an existing robots tag off the home route and restores it', () => {
    const meta = document.createElement('meta');
    meta.name = 'robots';
    meta.content = 'index, follow';
    document.head.append(meta);
    window.history.replaceState(null, '', '/missing');

    const { unmount } = render(<App />);
    expect(document.querySelectorAll('meta[name="robots"]')).toHaveLength(1);
    expect(meta.content).toBe('noindex');

    unmount();
    expect(meta.content).toBe('index, follow');
    meta.remove();
  });

  it('renders a not-found view off the home route', () => {
    window.history.replaceState(null, '', '/missing');
    render(<App />);
    expect(
      screen.getByRole('heading', {
        level: 1,
        name: 'Nothing at this address.',
      })
    ).toBeTruthy();
    expect(document.querySelector('meta[name="robots"]').content).toBe(
      'noindex'
    );
  });
});
