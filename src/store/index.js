import Vuex from 'vuex'

import state from './state';
import mutations from './mutations';
import actions from './actions';

export default Vuex.createStore({
  state,
  mutations,
  actions
});
