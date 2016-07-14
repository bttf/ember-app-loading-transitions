import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return new Ember.RSVP.Promise(resolve => {
      Ember.run.later(() => {
        resolve(['red', 'blue']);
      }, 3000);
    });
  },
});
