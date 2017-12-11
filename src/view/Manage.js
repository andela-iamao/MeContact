import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Text, Image } from 'react-native';

import { Button, Avatar, ContactItem } from '../component';

import style from '../style/style';

class Manage extends Component {
  render() {
    const { navigate, contacts, remove } = this.props;
    return (
      <View style={[style.contentContainer, style.manageContainer]}>
        <Image
          blurRadius={1}
          resizeMode='cover'
          style={style.blurImageBg}
          source={require('../assets/images/nannabg.jpg')}
        />
        <View style={style.manageContactsUserProfile}>
          <Avatar/>
          <Text style={style.manageContactsUserProfileName}>
            Nanna Bryndis
          </Text>
          <View style={[style.contactsTab, { marginTop: 20 }]}>
            <View style={[style.activeTab, style.contactsTabItem]}>
              <Text>Contacts</Text>
            </View>
            <View style={[style.inActiveTab, style.contactsTabItem]}><Text>Favorites</Text></View>
          </View>
        </View>
        <View style={style.contactsList}>
          {contacts.map((contact) =>
            <ContactItem key={contact.id} contact={contact} navigate={navigate} remove={remove}/>
          )}
        </View>
        <Button
          label="+"
          onPress={() => navigate('add-contact')}
          style={style.createContactButton}
          textStyle={{ fontSize: 48, fontWeight: 'bold', color: '#FFF' }}
        />
      </View>
    );
  }
}

Manage.propTypes = {
  navigate: PropTypes.func
};

export { Manage };
