import { GetterTree } from 'vuex';
import { State } from './types';

const getterNames = Object.freeze({
  hasBeenClicked: 'HAS_BEEN_CLICKED',
  hasBeenClickedNTimes: 'HAS_BEEN_CLICKED_N_TIMES',
} as const);

type Getters = {
  [getterNames.hasBeenClicked](state: State): boolean,
  [getterNames.hasBeenClickedNTimes](state: State): (id: number) => boolean;
}

const getters: GetterTree<State, State> & Getters = {
  // normal/object style getters
  [getterNames.hasBeenClicked](state) {
    return state.numberOfClicks !== 0;
  },
  // getters with params
  [getterNames.hasBeenClickedNTimes]: (state) => (id) => (state.numberOfClicks === id),
};

export {
  getters,
};

export type {
  Getters,
};
