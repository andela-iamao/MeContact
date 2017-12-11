import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Text } from 'react-native';

import { Button } from '../component';

class Manage extends Component {
  render() {
    const { navigate, contacts, remove } = this.props;
    return (
      <View>
        <Text>Manage View</Text>
        {contacts.map((contact) => (
          <View key={contact.id}>
            <Text>{contact.name}</Text>
            <Text>{contact.work}</Text>
            <Text>{contact.home}</Text>
            <Text>{contact.email}</Text>
            <Button
              label="Edit Contact"
              onPress={() => navigate('add-contact', {...contact, isEdit: true })}
            />
            <Button
              label="Delete Contact"
              onPress={() => remove(contact)}
            />
          </View>
        ))}
        <Button label="Create new Contact" onPress={() => navigate('add-contact')}/>
      </View>
    );
  }
}

Manage.propTypes = {
  navigate: PropTypes.func
};

export { Manage };
