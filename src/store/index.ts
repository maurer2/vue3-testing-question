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
});

export function useStore(): Store {
  return genericUseStore(key);
}

export type useStoreReturnType = typeof store // becomes any

export {
  store,
  key,
};
