import React from 'react';
import { shallow } from 'enzyme';

import HomePage from './HomePage';

const props = {};

let wrapper;
describe('HomePage', () => {
  beforeEach(() => {
    wrapper = shallow(<HomePage {...props} />);
  });

  it('should render content', () => {
    expect(wrapper.find('p').length).toBe(1);
  });
});
