import React from 'react';
import PropTypes from 'prop-types';
import { TouchableHighlight, Text } from 'react-native';

const Button = (props) => {
  return (
    <TouchableHighlight {...props}>
      <Text style={props.textStyle}>{props.label}</Text>
    </TouchableHighlight>
  );
};

Button.defaultProps = {
  textStyle: {}
};


Button.propTypes = {
  textStyle: PropTypes.object,
  label: PropTypes.string
};

export { Button };