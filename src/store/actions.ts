import { ActionTree, ActionPayload } from 'vuex';
import { State } from './types';
import { mutationNames } from './mutations';

const actionNames = Object.freeze({
  UPDATE_NUMBER_OF_CLICKS: 'UPDATE_NUMBER_OF_CLICKS',
} as const);

type ActionsName = keyof typeof actionNames

const actions: ActionTree<State, State> = {
  [actionNames.UPDATE_NUMBER_OF_CLICKS](context, payload?: Readonly<ActionPayload>): Promise<void> {
    context.commit(mutationNames.UPDATE_NUMBER_OF_CLICKS);

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
