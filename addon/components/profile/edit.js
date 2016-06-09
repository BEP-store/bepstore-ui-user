import Ember from 'ember';
import AuthenticatedRouteMixin from 'feedbackfruits-accounts/mixins/routes/authenticated-route-mixin';
import layout from 'bepstore-user/template/component/profile/edit';

export default Ember.Component.extend(AuthenticatedRouteMixin, {
  layout,

  actions: {
    dismiss: function(){
      history.back();
    },

    save: function(){
      this.get('model').save().then(() => {
        history.back();
      });
    }
  }
});
