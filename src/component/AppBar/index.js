import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';


import style from '../../style/style';

const AppBar = (props) => {
  return (
    <View style={style.appBar}>
      <Text
        style={style.appBarHome}
        onPress={() => props.navigate('home')}
      >
        Home
      </Text>
      <Text style={style.appBarLogo}>Me</Text>
    </View>
  );
};

export { AppBar };
