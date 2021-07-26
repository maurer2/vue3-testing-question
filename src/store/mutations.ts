import { MutationTree, MutationPayload } from 'vuex';
import { State } from './types';

const mutationNames = Object.freeze({
  updateNumberOfClicks: 'UPDATE_NUMBER_OF_CLICKS2',
} as const);

const mutations: MutationTree<State> = {
  [mutationNames.updateNumberOfClicks](state, payload?: MutationPayload): void {
    // eslint-disable-next-line no-param-reassign
    state.numberOfClicks += 1;
  },
};

export {
  mutations,
  mutationNames,
};
