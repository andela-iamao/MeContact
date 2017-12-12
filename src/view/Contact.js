import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Text, Image } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { Button } from '../component';

import * as contactAction from '../action/contacts.action';

import style from '../style/style';

@connect(
  (state) => ({ contacts: state.contacts }),
  (dispatch) => ({ contactAction: bindActionCreators(contactAction, dispatch)})
)
class Contact extends Component {
  componentWillMount() {
    if (!this.props.contacts.selected) {
      this.props.navigate('manage');
    }
  }

  componentWillReceiveProps(nextProps) {
    if (!nextProps.contacts.selected) {
      this.props.navigate('manage');
    }
  }

  componentWillUnmount() {
    this.props.contactAction.clearSelected();
    this.props.contactAction.stopCreation();
  }

  render() {
    const { contacts: { selected: contact }, navigate } = this.props;
    const { editContact, deleteContact } = this.props.contactAction;
    return (
      <View style={{ flex: 1 }}>
        <View style={style.contactContainer}>
          <Image
            style={style.contactsPageImage}
            source={require('../assets/images/ashara.jpg')}
          />
          <Text style={style.contactsPageName}>{contact.name}</Text>
          <View style={style.contactPageEditContainer} >
            <Button
              label="Edit"
              style={style.contactPageEditButton}
              textStyle={{ fontSize: 18, color: '#FFF' }}
                onPress={() => editContact(contact)}
            />
          </View>
        </View>

        <View style={{ padding: 10 }}>
          <Text style={style.noTextBG}>{contact.home.length > 0 ? contact.home : '-'}</Text>
          <Text style={style.noTextBG}>Home</Text>
        </View>
        <View style={{ padding: 10 }}>
          <Text style={style.noTextBG}>{contact.work.length > 0 ? contact.work : '-'}</Text>
          <Text style={style.noTextBG}>Work</Text>
        </View>
        <View style={{ padding: 10 }}>
          <Text style={style.noTextBG}>{contact.email.length > 0 ? contact.email : '-'}</Text>
          <Text style={style.noTextBG}>Email</Text>
        </View>
        <View style={style.contactPageDeleteContainer}>
          <Button
            label="Delete"
            onPress={() => deleteContact(contact)}
            style={style.contactPageDeleteButton}
            textStyle={{ fontSize: 18, color: '#FFF' }}/>
        </View>
      </View>
    );
  }
}

Contact.propTypes = {
  navigate: PropTypes.func
};

export { Contact };
