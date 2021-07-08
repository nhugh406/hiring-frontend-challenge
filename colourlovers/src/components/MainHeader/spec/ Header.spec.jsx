import React from 'react';
import { render } from '@testing-library/react';

import Header from '../Header';

describe('Colour Family Component Tests', () => {
  it('should match snapshot', () => {
    const { asFragment } = render(<Header />);
    expect(asFragment()).toMatchSnapshot();
  });
});
