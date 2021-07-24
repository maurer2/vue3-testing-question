/* eslint-disable no-param-reassign */

import { createStore, useStore as genericUseStore } from 'vuex';
import { InjectionKey } from 'vue';

import {
  appStates,
  Actions,
  State,
  Store,
  Getters,
  Mutations,
// eslint-disable-next-line import/extensions
} from './types';

const key: InjectionKey<Store> = Symbol('key');
const store = createStore<State>({
  state() {
    return {
      appState: 'loaded',
      numberOfClicks: 0,
    };
  },
  actions: {
    UPDATE_NUMBER_OF_CLICKS(context): Promise<void> {
      context.commit('UPDATE_NUMBER_OF_CLICKS');

      return Promise.resolve();
    },
  } as Actions,
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
