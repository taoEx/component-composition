import Ember from 'ember';
import SafeEvalUtility from '../../../utilities/safe-eval';

export default Ember.Route.extend({
  renderTemplate() {
    var self = this;
    var test = SafeEvalUtility.getValue('(function(){ return {a:1,b:"009"}})()');
    // var cptmpl = this.get('templateCompiled');
    // // var precompiled = eval(cptmpl);
    // Ember.TEMPLATES["offers-campaign/offer/accepted"] = Ember.Handlebars.template(eval(cptmpl));
    self.render('offers-campaign/offer/declined',{into:'offers-campaign'});
    // Ember.run.later(function() {

    // },500);
    
  },
});
