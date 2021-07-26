import { GetterTree } from 'vuex';
import { State } from './types';

const getterNames = Object.freeze({
  hasBeenClicked: 'HAS_BEEN_CLICKED',
} as const);

type Getters = {
  [getterNames.hasBeenClicked](state: State): boolean
}

const getters: GetterTree<State, State> & Getters = {
  [getterNames.hasBeenClicked](state) {
    return state.numberOfClicks !== 0;
  },
};

export {
  getters,
};

export type {
  Getters,
};
