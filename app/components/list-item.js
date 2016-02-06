import Ember from 'ember';

export default Ember.Component.extend({
  tagName:'li',
  caption:'item',
  init() {
    this.on('willInsertElement',function() {
      // console.log(this);
      this.sendAction('register',this);
    });
    this._super.apply(this,arguments);
  },
  close() {
    console.log(this);
  },
  click() {
    this.sendAction('onClick');
  }
});
