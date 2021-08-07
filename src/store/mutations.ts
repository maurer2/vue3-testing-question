import { MutationTree, MutationPayload } from 'vuex';
import { State } from './types';

const mutationNames = Object.freeze({
  UPDATE_NUMBER_OF_CLICKS: 'UPDATE_NUMBER_OF_CLICKS',
} as const);

const mutations: MutationTree<State> = {
  [mutationNames.UPDATE_NUMBER_OF_CLICKS](state, payload?: Readonly<MutationPayload>): void {
    // eslint-disable-next-line no-param-reassign
    state.numberOfClicks += 1;
  },
};

export {
  mutations,
  mutationNames,
};
