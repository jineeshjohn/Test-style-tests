import React from 'react';
import { MemoryRouter, Switch, Route } from 'react-router-dom';
import { mount } from 'enzyme';

import Main from './Main';
import NotFound from './NotFound';

describe('<App />', () => {
  describe('{ pathname: "/" }', () => {
    test('it should render <Main />', () => {
      const wrapper = mount(
        <MemoryRouter initialEntries={['/']}>
          <Switch>
            <Route exact path='/' component={Main} />
            <Route component={NotFound} />
          </Switch>
        </MemoryRouter>
      );

      expect(wrapper.find('Main')).toExist();
      expect(wrapper.find('NotFound')).not.toExist();
    });
  });

  describe('{ pathname: "/foo" }', () => {
    test('it should render <NotFound />', () => {
      const wrapper = mount(
        <MemoryRouter initialEntries={['/foo']}>
          <Switch>
            <Route exact path='/' component={Main} />
            <Route component={NotFound} />
          </Switch>
        </MemoryRouter>
      );

      expect(wrapper.find('NotFound')).toExist();
      expect(wrapper.find('Main')).not.toExist();
    });
  });
});
