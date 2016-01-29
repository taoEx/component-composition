import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('page',{path: '/pages/:page_slug'});
  this.route('offers-campaign',{path:'/campaign/:campaign_id'},function() {
    this.route('offer',{path:'/:offer_slug'},function() {
      this.route('accepted');
    });
  });
  
});

export default Router;
