import Ember from 'ember';

export default Ember.Component.extend({
  validation:Ember.inject.service(),
  offerData: Ember.inject.service(),
  didInsertElement() {
    var target = this.get('target');
  },
  actions: {
    validate() {
      var validation = this.get('validation');
      var data = this.get('offerData');
      validation.rules.forEach(function(item){
        if (item.field==='incomeForm.personalAnnualIncome') {
          validation.set('personalAnnualIncomeValid','Personal Annual Income valid');
        }
      });
      data.set('toggle',!data.get('toggle'));
    }
  }
});
