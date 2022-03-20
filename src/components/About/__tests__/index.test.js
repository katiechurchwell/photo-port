import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import About from '..';


afterEach(cleanup);

describe('About component', () => {
  // First Test
  // Baseline to verify that the component is rendering.
  it('renders', () => {
    render(<About />);
  });

  //Second Test or "test case"
  it('matches snapshot DOM node structure', () => {
    //returns a snapshot of the About component
    const { asFragment } = render(<About />);
    //test and compare whether the expected and actual outcomes match
    expect(asFragment()).toMatchSnapshot();
  });
})