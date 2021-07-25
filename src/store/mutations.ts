import { MutationTree, MutationPayload } from 'vuex';
import { State } from './types';

const mutationsNames = Object.freeze({
  updateNumberOfClicks: 'UPDATE_NUMBER_OF_CLICKS',
} as const);

const mutations: MutationTree<State> = {
  [mutationsNames.updateNumberOfClicks](state, payload?: MutationPayload): void {
    // eslint-disable-next-line no-param-reassign
    state.numberOfClicks += 1;
  },
};

export {
  mutations,
};
