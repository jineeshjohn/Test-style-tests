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
});
