import React from 'react';
import { View, Image } from 'react-native';

import style from '../../style/style';

const Logo = () => {
  return (
    <View style={style.headerLogoContainer}>
      <Image
        source={require('../../assets/images/me-contact-logo.png')}
        style={style.headerLogo}
      />
    </View>
  );
};

export { Logo };
