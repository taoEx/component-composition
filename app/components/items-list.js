import Ember from 'ember';

export default Ember.Component.extend({
  tagName:'button',
  children:[],
  actions:{
    registerChild(child) {
      this.get('children').pushObject(child);
    },
    closeAll() {
      let children=this.get('children');
      if (children.length>0) {
        children.forEach(function(child){
          child.close();
        });
      }
    }
  }
});
