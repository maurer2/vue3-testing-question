import { GetterTree } from 'vuex';
import { State } from './types';

const getterNames = Object.freeze({
  hasBeenClicked: 'HAS_BEEN_CLICKED',
} as const);

const getters: GetterTree<State, State> = {
  [getterNames.hasBeenClicked](state): boolean {
    return state.numberOfClicks !== 0;
  },
};

export {
  getters,
};
