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
  Mutations,
// eslint-disable-next-line import/extensions
} from './types';

import {
  actions,
// eslint-disable-next-line import/extensions
} from './actions';

const key: InjectionKey<Store> = Symbol('key');
const store = createStore<State>({
  state() {
    return {
      appState: 'loaded',
      numberOfClicks: 0,
    };
  },
  actions,
  mutations: {
    UPDATE_NUMBER_OF_CLICKS(state): void {
      state.numberOfClicks += 1;
    },
  } as Mutations,
});

export function useStore(): Store {
  return genericUseStore(key);
}

export {
  store,
  key,
};
