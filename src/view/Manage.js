import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { View, Text, Image } from 'react-native';

import { Button, Avatar, ContactItem } from '../component';

import * as contactAction from '../action/contacts.action';
// import * as actionType from '../action/actionType';

import style from '../style/style';
import {startCreation} from "../action/contacts.action";

@connect(
  (state) => ({ contacts: state.contacts }),
  (dispatch) => ({ action: bindActionCreators(contactAction, dispatch)})
)
class Manage extends Component {
  componentDidMount() {
    !this.props.contacts.data && this.props.action.fetchContacts();
  }


  render() {
    const { navigate, contacts, remove } = this.props;
    const { updateContact, deleteContact, createContact, selectContact, startCreation } = this.props.action;
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
          {contacts.data && contacts.data.map((contact) =>
            <ContactItem
              remove={remove}
              key={contact.id}
              contact={contact}
              navigate={navigate}
              del={deleteContact}
              select={selectContact}
              update={updateContact}
            />
          )}
        </View>
        <Button
          label="+"
          onPress={() => startCreation()}
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
