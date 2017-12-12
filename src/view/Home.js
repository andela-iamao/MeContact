import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Text, Image } from 'react-native';

import { Logo, Button } from '../component';
import style from '../style/style';


class Home extends Component {
  render() {
    const { navigate } = this.props;
    return (
      <View style={[style.defaultContainer, style.homeContainer]}>
        <Image style={style.coverImage} source={require('../assets/images/bg1.jpg')} />
        <View style={style.coverImageOverlay} />
        <Logo />
        <Text style={style.tagLine}>Create, Connect, Love...</Text>
        <Button
          label="Contacts"
          style={style.roundBorderButton}
          textStyle={{ color: '#FFF', fontWeight: 'bold', fontSize: 18 }}
          onPress={() => navigate('manage')}/>
      </View>
    );
  }
}

Home.propTypes = {
  navigate: PropTypes.func
};

export { Home };
