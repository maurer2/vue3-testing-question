import { createStore, useStore } from 'vuex';
import { State } from '../store/types';
// import { key } from '../store/index';

const storeInitial = createStore<State>({
  state: {
    appState: 'loaded',
    numberOfClicks: 0,
  },
  getters: {
    HAS_BEEN_CLICKED: jest.fn(() => false),
    HAS_BEEN_CLICKED_N_TIMES: jest.fn(() => (number: number) => false),
  },
  actions: {
    UPDATE_NUMBER_OF_CLICKS: jest.fn().mockResolvedValue(undefined),
  },
});

// causes: [Vue warn]: inject() can only be used inside setup() or functional components.
// const keyedStore = useStore(key);

export {
  storeInitial,
};

export { key } from '../store/index';
