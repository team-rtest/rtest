import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

import Courses from 'views/Professor/Courses/Courses';

test('renders your courses', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Your Courses/i);
  expect(linkElement).toBeInTheDocument();
});
