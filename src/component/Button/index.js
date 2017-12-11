import React from 'react';
import PropTypes from 'prop-types';
import { TouchableHighlight, Text } from 'react-native';

const Button = (props) => {
  return (
    <TouchableHighlight {...props}>
      <Text>{props.label}</Text>
    </TouchableHighlight>
  );
};

Button.propTypes = {
  label: PropTypes.string
};

export { Button };