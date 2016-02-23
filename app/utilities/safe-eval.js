// safe-eval.js
import Ember from 'ember';
export default Ember.Namespace.create({
  value:null,
  getValue(expression) {
    Function('this.value='+expression).call(this);
    return this.value;
  }
});
