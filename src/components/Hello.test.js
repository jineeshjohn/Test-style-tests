import React from 'react';
import { shallow } from 'enzyme';

import Hello from './Hello';

describe('<Hello />', () => {
  describe('<h1>', () => {
    test('it should have default prop { name: "Codesandbox" }', () => {
      const wrapper = shallow(<Hello />);
      const h1 = wrapper.find('h1');

      expect(h1).toIncludeText('Codesandbox');

      // Expected props: [33mname[39m[90m:[39m [33m[31mundefined[33m[39m
      // Actual props:   [33mname[39m[90m:[39m [33m[31mundefined[33m[39m
      // expect(wrapper).toHaveProp('name');
    });
  });
});
