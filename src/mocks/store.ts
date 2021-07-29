import { createStore, useStore } from 'vuex';
import { State } from '../store/types';
import { key } from '../store/index';

const storeInitial = createStore({
  state: {
    appState: 'initial',
    numberOfClicks: 0,
  } as State,
  getters: {
    HAS_BEEN_CLICKED: jest.fn(() => false),
    HAS_BEEN_CLICKED_N_TIMES: jest.fn(() => (number: number) => false),
  } as any,
});

const keyedStore = useStore(key);

export {
  storeInitial,
  keyedStore,
};
