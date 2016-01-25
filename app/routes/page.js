import Ember from 'ember';

export default Ember.Route.extend({
  validation:Ember.inject.service(),
  model(params) {
    var validation = this.get('validation');
    var rules = [];
    rules.pushObject({field:'incomeForm.personalAnnualIncome',
      rules:['required','numeric',{max:100000,min:10}]});
    validation.set('rules',rules);
    if (params.page_slug==='test') {
      return Ember.Object.create({
        pageContent: [
          {masthead: {
            html: '<h4>Offer masterhead</h4>'
          }},
          // this.createFormItem('masterhead',{html:'<h4>Offer masterhead</h4>'}),
          {incomeForm: [
            {instruction: {
              html:'<h5>Income Form Instruction</h5>'
            }},
            {name:{
              // name:'name',
              caption:'Name',
              value:'John Doe'
            }},
            {personalAnnualIncome: {
              // name:'personalAnnualIncome',
              caption:'Personal Annual Income',
              value:20000,
              valueMin:10,
              valueMax:100000
            }},
            {help:{
              html:'<h5>Income Form Help</h5>'
            }},
            
          ]},
          {actionPanel:true}
        ]
      });
    }
  },

  createFormItem(name,content){
    var formItem = {};
    formItem[name]=content;
    // return Ember.Object.create(formItem);
    return formItem;
  }
});
