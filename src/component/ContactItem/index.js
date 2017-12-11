import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';

import { Button } from '../';

import style from '../../style/style';

const ContactItem = (props) => {
  const { contact, navigate, remove } = props;
  return (
    <View style={style.contactListItem}>
      <View
        style={[style.contactListItemInfo, { flexDirection: 'row' }]}>
        <View>
          <Image
            onPress={() => navigate('contact')}
            source={require('../../assets/images/ashara.jpg')}
            style={{ width: 50, height: 50, borderRadius: 30 }}
          />
        </View>
        <View style={{ marginLeft: 10 }}>
          <TouchableOpacity onPress={() => {
            debugger;
            return navigate('contact', { contact, remove, navigate })
          }}>
          <Text
            style={style.contactListItemName}
          >
            {contact.name}
          </Text>
          </TouchableOpacity>
          <Text>{contact.home}</Text>
        </View>
      </View>
      <View style={style.contactListItemAction}>
        <Button
          label="Edit"
          onPress={() => navigate('add-contact', {...contact, isEdit: true })}
        />
        <Button
          label="Delete"
          onPress={() => remove(contact)}
        />
      </View>
    </View>
  );
};

export { ContactItem };
