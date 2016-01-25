import Ember from 'ember';

export default Ember.Component.extend({
  validation:Ember.inject.service(),
  actions: {
    validate() {
      var validation = this.get('validation');
      validation.rules.forEach(function(item){
        if (item.field==='incomeForm.personalAnnualIncome') {
          validation.set('personalAnnualIncomeValid','Personal Annual Income valid');
        }
      });
    }
  }
});
