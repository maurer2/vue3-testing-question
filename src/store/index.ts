/* eslint-disable no-param-reassign */
import { createStore, useStore as genericUseStore } from 'vuex';
import { InjectionKey } from 'vue';
import { State, Store } from './types';

import { actions } from './actions';
import { mutations } from './mutations';
import { getters } from './getters';

const key: InjectionKey<Store> = Symbol('key');
const store = createStore<State>({
  state() {
    return {
      appState: 'loaded',
      numberOfClicks: 0,
    };
  },
  getters,
  actions,
  mutations,
});

function useStore(): Store {
  return genericUseStore();
  // return genericUseStore(key);
}

export {
  useStore,
  store,
  key,
};
