import JSONAPIAdapter from '@ember-data/adapter/json-api';

export default class ApplicationAdapter extends JSONAPIAdapter {
  //namespace = 'api';
  host = 'http://localhost:3000'

  buildURL(...args) {
    return `${super.buildURL(...args)}`;
  }
}