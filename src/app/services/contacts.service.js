export const ContactsService = function ($http) {
  class ContactsModel {
    get() {
      return $http({
        url: 'https://s3.amazonaws.com/technical-challenge/Contacts_v2.json',
        method: 'GET'
      }).then((res) => {
        // Return response
        return res;
      }, () => {
        // Handle error
        return 'Error contacting service';
      });
    }
  }
  return ContactsModel;
};