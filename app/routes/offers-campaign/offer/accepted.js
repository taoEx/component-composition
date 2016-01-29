import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return Ember.Object.create({value:'accepted'});
  },
  renderTemplate() {
    var self = this;
    self.render('offers-campaign/offer/accepted',{into:'offers-campaign'});
    // Ember.run.later(function() {

    // },500);
    
  }
});
