import React from 'react';
import { render } from '@testing-library/react';

import ColourCard from '../ColourCard';

const mockProps = {
  id: 92095,
  title: 'Giant Goldfish',
  userName: 'manekineko',
  numViews: 1087457,
  numVotes: 12107,
  numComments: 777,
  numHearts: 4.5,
  rank: 1,
  dateCreated: '2007-07-03 10:42:02',

  colors: ['69D2E7', 'A7DBD8', 'E0E4CC', 'F38630', 'FA6900'],
  description:
    'I-MOO\r\n<div style="width: 300px; text-align: center;"><a href="http://www.colourlovers.com/contests/moo/minicard/2291466" target="_blank" style="display: block; margin-bottom: 5px; width: 300px; height: 120px; -moz-box-shadow: 0 1px 4px #d1d1d1; -webkit-box-shadow: 0 1px 4px #d1d1d1; box-shadow: 0 1px 4px #d1d1d1; filter: progid:DXImageTransform.Microsoft.Shadow(Strength=1, Direction=180, Color=',
  url: 'http://www.colourlovers.com/palette/92095/Giant_Goldfish',
  imageUrl:
    'http://www.colourlovers.com/paletteImg/69D2E7/A7DBD8/E0E4CC/F38630/FA6900/Giant_Goldfish.png',
  badgeUrl:
    'http://www.colourlovers.com/images/badges/p/92/92095_Giant_Goldfish.png',
  apiUrl: 'http://www.colourlovers.com/api/palette/92095',
};

describe('Colour Family Component Tests', () => {
  it('should match snapshot', () => {
    const { asFragment } = render(<ColourCard {...mockProps} />);
    expect(asFragment()).toMatchSnapshot();
  });
});
