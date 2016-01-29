import Ember from 'ember';

export default Ember.Route.extend({
  model(params){
    return Ember.Object.create({
      value:params.campaign_id
    })
  }
});
