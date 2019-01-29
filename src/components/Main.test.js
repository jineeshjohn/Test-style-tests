import React from 'react';
import { shallow, mount } from 'enzyme';

import Main from './Main';

describe('<Main />', () => {
  describe('<main>', () => {
    test('it should have style "text-align: center"', () => {
      const wrapper = shallow(<Main />);
      const main = wrapper.dive().find('main');

      expect(main).toHaveStyleRule('text-align', 'center');
    });
  });

  describe('<h2>', () => {
    test('it should have style "font-weight: 300"', () => {
      const wrapper = mount(<Main />);
      const h2 = wrapper.find('h2');

      expect(h2).toHaveStyleRule('font-weight', '300');
    });

    test('it should include sparkles emoji', () => {
      const wrapper = mount(<Main />);
      const h2 = wrapper.find('h2');

      expect(h2).toIncludeText('✨');
    });
  });
});
