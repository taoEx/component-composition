import Ember from 'ember';

export default Ember.Component.extend({
  validation:Ember.inject.service(),
  offerData: Ember.inject.service(),
});
