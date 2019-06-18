import React from 'react';
import { shallow } from 'enzyme';

import Home from './Home';

const props = {};

let wrapper;
describe('Home', () => {
  beforeEach(() => {
    wrapper = shallow(<Home {...props} />);
  });

  it('should render content', () => {
    expect(wrapper.find('p').length).toBe(1);
  });
});
