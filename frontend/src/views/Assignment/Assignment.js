import React, { useState } from 'react';
import styled from 'styled-components';

import AssignmentList from './AssignmentList';
import AssignmentPage from './AssignmentPage';

import { Link } from 'react-router-dom';

function Assignment({ ...rest }) {
  const [selected, setSelected] = useState(2);

  const assignments = [
    { id: 0, name: 'Lab 0: K Nearest Neighbors', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco' },
    { id: 1, name: 'Lab 1: Decision Tree', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco' },
    { id: 2, name: 'Lab 2: Apriori Algorithm', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco' },
    { id: 3, name: 'Lab 3: Naive Bayes', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco' },
    { id: 4, name: 'Lab 4: Perceptron', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco' },
    { id: 5, name: 'Lab 5: Random Forests', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco' },
    { id: 6, name: 'Lab 6: Neural Networks', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco' },
    { id: 7, name: 'Lab 7: Convolutional Neural Networks', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco' },
  ]

  return (
    <Box>
      <AssignmentList assignments={assignments} selected={selected} setSelected={setSelected} />
      <AssignmentPage assignment={assignments[selected]} />
    </Box>
  );
}

const Box = styled.div`
  display: flex;
  align-items: stretch;
  height: calc(100vh - 80px);
`;

export default Assignment;
