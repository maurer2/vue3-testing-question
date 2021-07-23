import { createStore, Store as StoreType } from 'vuex';
import { InjectionKey } from 'vue';

import {
  appStates,
  Store,
  Actions,
  State,
  Getters,
  Mutations,
} from './types.ts';

const key: InjectionKey<Store<State>> = Symbol('key');

const store = createStore<StoreType<Store>>({
  state: {
    // appState: 'initial',
    numberOfClicks: 0,
  },
});

export {
  store,
  key,
};
