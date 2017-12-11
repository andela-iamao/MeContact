import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Text } from 'react-native';

class Contact extends Component {
  render() {
    return (
      <View>
        <Text>Contact View</Text>
      </View>
    );
  }
}

Contact.propTypes = {
  navigate: PropTypes.func
};

export { Contact };
