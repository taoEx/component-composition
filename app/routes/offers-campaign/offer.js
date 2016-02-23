import Ember from 'ember';

export default Ember.Route.extend({
  model(params){
    return Ember.Object.create({
      value:params.offer_slug
    });
  },
  // renderTemplate() {
  //   this.render('offers-campaign');
  // }
  actions:{
    decline() {
      this.transitionTo('offers-campaign.offer.declined');
    }
  }
});
