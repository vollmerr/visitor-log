import React from 'react';
import { shallow } from 'enzyme';

import Help from './Help';

const props = {};

let wrapper;
describe('Help', () => {
  beforeEach(() => {
    wrapper = shallow(<Help {...props} />);
  });

  it('should render content', () => {
    expect(wrapper.find('p').length).toBe(1);
  });
});
