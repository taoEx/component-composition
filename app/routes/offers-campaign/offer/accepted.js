import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return Ember.Object.create({
      value:'accepted',
      item1:'item1',
      item2:'item2',
      item3:'item3'
    });
  },
  renderTemplate() {
    var self = this;
    self.render('offers-campaign/offer/accepted',{into:'offers-campaign'});
    // Ember.run.later(function() {

    // },500);
    
  },
  actions: {
    back() {
      this.transitionTo('offers-campaign.offer','migration');
    }
  }
});
