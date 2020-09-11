import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders upload button', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Upload Your File/i);
  expect(linkElement).toBeInTheDocument();
});
