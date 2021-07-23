import { createStore, Store as GenericStore } from 'vuex';
import { InjectionKey } from 'vue';

import {
  appStates,
  // Store,
  Actions,
  State,
  Getters,
  Mutations,
// eslint-disable-next-line import/extensions
} from './types';

const state: State | any = {
  appState: 'loaded',
  numberOfClicks: 0,
};

const key: InjectionKey<GenericStore<State>> = Symbol('key');
const store = createStore<GenericStore<State>>({
  state,
});

export {
  store,
  key,
};
