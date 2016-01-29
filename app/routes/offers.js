import Ember from 'ember';

export default Ember.Route.extend({
  beforeModel(transition){
    this.transitionTo('offer','miggg');
  },
  model () {
    return Ember.Object.Create(['A','B']);
  }
});
