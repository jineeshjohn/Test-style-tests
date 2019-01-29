import React from 'react';
import { shallow, mount } from 'enzyme';

import NotFound from './NotFound';

describe('<NotFound />', () => {
  describe('<main>', () => {
    test('it should have style "text-align: center"', () => {
      const wrapper = shallow(<NotFound />);
      const main = wrapper.dive().find('main');

      expect(main).toHaveStyleRule('text-align', 'center');
    });
  });

  describe('<h1>', () => {
    test('it should have "Not Found" text', () => {
      const wrapper = shallow(<NotFound />);
      const h1 = wrapper.dive().find('h1');

      expect(h1).toHaveText('Not Found');
    });
  });

  describe('<span>', () => {
    test('it should have unicorn emoji', () => {
      const wrapper = mount(<NotFound />);
      const span = wrapper.find('span');

      expect(span).toHaveText('🦄');
    });
  });
});
