/* eslint-disable no-param-reassign */
import {
  createStore, useStore as genericUseStore, ActionTree, ActionPayload,
} from 'vuex';
import { InjectionKey } from 'vue';

import {
  actionsName,
  appStates,
  // Actions,
  State,
  Store,
  Getters,
} from './types';

import { actions } from './actions';
import { mutations } from './mutations';

const key: InjectionKey<Store> = Symbol('key');
const store = createStore<State>({
  state() {
    return {
      appState: 'loaded',
      numberOfClicks: 0,
    };
  },
  actions,
  mutations,
});

export function useStore(): Store {
  return genericUseStore(key);
}

export {
  store,
  key,
};
