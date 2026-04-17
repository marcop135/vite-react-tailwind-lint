/* global describe, it, expect */
import { render, screen } from '@testing-library/react';
import React from 'react';
import App from './App';

describe('App', () => {
  it('renders without crashing', () => {
    render(<App />);
    expect(screen.getAllByText('App Interface').length).toBeGreaterThan(0);
  });

  it('renders navigation links', () => {
    render(<App />);
    expect(screen.getByText('Dashboard')).toBeTruthy();
    expect(screen.getByText('Info')).toBeTruthy();
    expect(screen.getByText('Actions')).toBeTruthy();
  });
});
