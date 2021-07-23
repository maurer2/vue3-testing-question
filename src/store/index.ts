import { createStore, Store as GenericStore, useStore as genericUseStore } from 'vuex';
import { InjectionKey } from 'vue';

import {
  appStates,
  Actions,
  State,
  Getters,
  Mutations,
// eslint-disable-next-line import/extensions
} from './types';

const key: InjectionKey<GenericStore<State>> = Symbol('key');
const store = createStore<State>({
  state() {
    return {
      appState: 'loaded',
      numberOfClicks: 0,
    };
  },
});

export function useStore(): GenericStore<State> {
  return genericUseStore(key);
}

export type useStoreReturnType = typeof store // becomes any

export {
  store,
  key,
};
