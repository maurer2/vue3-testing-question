/* eslint-disable no-param-reassign */

import {
  createStore, useStore as genericUseStore, ActionTree, ActionPayload,
} from 'vuex';
import { InjectionKey } from 'vue';

import {
  actionsMap,
  appStates,
  // Actions,
  State,
  Store,
  Getters,
  Mutations,
// eslint-disable-next-line import/extensions
} from './types';

const actions: ActionTree<State, State> = {
  [actionsMap.updateNumberOfClicks](context, payload: ActionPayload): Promise<void> {
    context.commit(actionsMap.updateNumberOfClicks);

    return Promise.resolve();
  },
};

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
