import { ActionTree, ActionPayload } from 'vuex';
import { State } from './types';
import { mutationsNames } from './mutations';

const actionsNames = Object.freeze({
  updateNumberOfClicks: 'UPDATE_NUMBER_OF_CLICKS',
} as const);

type ActionsName = keyof typeof actionsNames

const actions: ActionTree<State, State> = {
  [actionsNames.updateNumberOfClicks](context, payload?: ActionPayload): Promise<void> {
    context.commit(mutationsNames.updateNumberOfClicks);

    return Promise.resolve();
  },
};

export {
  actions,
  actionsNames,
};

export type {
  ActionsName,
};
