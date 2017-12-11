import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export default StyleSheet.create({
  defaultContainer: { width, flex: 1 },
  homeContainer: { alignItems: 'center', justifyContent: 'center' },
  contentContainer: { marginTop: 40 },
  headerLogoContainer: {
    top: 70,
    width: 70,
    zIndex: 5,
    height: 70,
    borderWidth: 5,
    borderRadius: 50,
    marginBottom: 50,
    borderColor: '#FFF',
    alignItems: 'center',
    position: 'absolute',
    justifyContent: 'center',
  },
  headerLogo: {
    width: 50,
    height: 50,
    borderRadius: 40,
    borderWidth: 2,
    borderColor: '#FFF',
  },
  coverImageOverlay: {
    width,
    height,
    zIndex: 3,
    opacity: 0.5,
    position: 'absolute',
    backgroundColor: '#C0C0C0',
  },
  coverImage: {
    zIndex: 4,
    position: 'absolute',
  },
  tagLine: {
    fontSize: 28,
    color: '#fff',
    marginBottom: 60,
    fontWeight: 'bold',
  },
  roundBorderButton: {
    width: 150,
    padding: 10,
    borderWidth: 5,
    borderRadius: 30,
    borderColor: '#FFF',
    alignItems: 'center'
  },
  appBar: {
    width,
    height: 40,
    top: 0,
    left: 0,
    zIndex: -2,
    flexDirection:'row',
    position: 'absolute',
    backgroundColor: '#4299e2',
    justifyContent: 'space-between',
  },
  appBarLogo: {
    padding: 10,
    fontSize: 18,
    color: '#FFF',
    fontWeight: 'bold',
    alignItems: 'center',
    width: (width * 4) /5,

  },
  appBarHome: {
    width: width / 5,
    padding: 10,
    color: '#FFF',
    backgroundColor: '#126be2',
  },
  manageContainer: { marginTop: 20, flex: 1 },
  manageContactsUserProfile: { alignItems: 'center', marginTop: 5 },
  manageContactsUserProfileName: { fontWeight: 'bold', color: '#FFF', fontSize: 18 },
  imgAvatar: { width: 80, height: 80, borderRadius: 40 },
  blurImageBg: {
    position: 'absolute',
    top: -40,
    left: 0
  },
  contactsTab: {
    flexDirection:'row',
    alignItems: 'center',
    backgroundColor: '#EFEFEF',
  },
  contactsTabItem: {
    padding: 10,
    width: (width / 2) - 5,
    alignItems: 'center'
  },
  activeTab: {
  },
  inActiveTab: {
    backgroundColor: '#C0C0C0'
  },
  contactContainer: { marginTop: 40 },
  contactsList: { marginTop: 5, alignItems: 'center', padding: 10 },
  contactListItem: {
    padding: 15,
    width: width - 10,
    flexDirection:'row',
    borderBottomWidth: 1,
    borderBottomColor: '#C0C0C0',
    backgroundColor: 'rgba(239, 239, 239, 0.7)',
  },
  contactListItemInfo: { width: width / 2, alignItems: 'flex-start' },
  contactListItemName: { fontSize: 18, fontWeight: 'bold' },
  contactListItemAction: { width: (width / 2) - 30, alignItems: 'flex-end' },
  createContactButton:{
    borderRadius: 50,
    borderWidth: 5,
    width: 50,
    height: 50,
    position: 'absolute',
    bottom: 0,
    right: 0,
    flex: 1,
    borderColor: '#FFF',
    alignItems: 'center',
    justifyContent: 'center'
  },
  contactsPageImage: { width, height: height / 3 },
  contactsPageName: {
    color: '#FFF',
    fontWeight: 'bold',
    position: 'absolute',
    bottom: 10,
    left: 10,
    fontSize: 32 },
  contactPageEditContainer: {
    position: 'absolute',
    bottom: -30,
    right: 5
  },
  contactPageEditButton: {
    backgroundColor: '#4299E2',
    padding: 15
  },
  contactPageEditButtonText: {
    fontSize: 18,
    color: '#FFF'
  },
  contactPageDeleteContainer: {
    position: 'absolute',
    bottom: 0,
    width,
    alignItems: 'center'
  },
  contactPageDeleteButton: {
    padding: 15,
    backgroundColor: '#E21430'
  },
  contactpageDeleteText: {
    fontSize: 18,
    color: '#FFF'
  },
  inputStyle: { width: width - 20, height: 50 },
  addContactHeader: { fontSize: 22, fontWeight: 'bold' },
  addContactButton: { borderRadius: 40, width: 200, alignItems: 'center' },
  noTextBG: { backgroundColor: 'transparent' }
});