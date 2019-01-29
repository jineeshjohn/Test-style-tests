import React from 'react';
import PropTypes from 'prop-types';

function Hello({ name }) {
  return <h1>Hello {name}!</h1>;
}

Hello.propTypes = {
  name: PropTypes.string,
};

Hello.defaultProps = {
  name: 'Codesandbox',
};

export default Hello;
