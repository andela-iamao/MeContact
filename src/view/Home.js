import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Text } from 'react-native';

import { Logo, Button } from '../component';

class Home extends Component {
  render() {
    const { navigate } = this.props;
    return (
      <View>
        <Logo/>
        <Text>Home View</Text>
        <Button label="Contacts" onPress={() => navigate('manage')}/>
      </View>
    );
  }
}

Home.propTypes = {
  navigate: PropTypes.func
};

export { Home };
