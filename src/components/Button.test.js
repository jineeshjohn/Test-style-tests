import React from 'react'
import styled from 'styled-components'
import renderer from 'react-test-renderer'
import 'jest-styled-components'
import Button from './Button';

test('it works again', () => {
  const tree = renderer.create(<Button />).toJSON()
  expect(tree).toMatchSnapshot()
  expect(tree).toHaveStyleRule('color', 'blue')
})