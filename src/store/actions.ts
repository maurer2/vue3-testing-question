import { ActionTree, ActionPayload } from 'vuex';
import { State } from './types';
import { mutationNames } from './mutations';

const actionNames = Object.freeze({
  updateNumberOfClicks: 'UPDATE_NUMBER_OF_CLICKS',
} as const);

type ActionsName = keyof typeof actionNames

const actions: ActionTree<State, State> = {
  [actionNames.updateNumberOfClicks](context, payload?: ActionPayload): Promise<void> {
    context.commit(mutationNames.updateNumberOfClicks);

    return Promise.resolve();
  },
};

export {
  actions,
  actionNames,
};

export type {
  ActionsName,
};
