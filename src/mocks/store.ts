import { State } from '../store/types';

const storeInitial = {
  state: {
    appState: 'initial',
    numberOfClicks: 0,
  } as State,
  dispatch: jest.fn(),
  getters: {
    HAS_BEEN_CLICKED: false,
    HAS_BEEN_CLICKED_N_TIMES: jest.fn((number: number) => false),
  },
};

export {
  storeInitial,
};
