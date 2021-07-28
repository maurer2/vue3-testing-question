import { State } from '../store/types';

const storeInitial = {
  state: {
    appState: 'initial',
    numberOfClicks: 0,
  } as State,
  dispatch: jest.fn(),
};

export {
  storeInitial,
};
