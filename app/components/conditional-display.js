import Ember from 'ember';

export default Ember.Component.extend({
  isDisplaying: false,
  displayToggle: Ember.observer('isDisplaying',function(){
    var element = this.$()[0];
    if (this.isDisplaying) {
      element.style.height=0;
    } else {element.style.height='100%';}
  })
});
