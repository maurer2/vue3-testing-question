import {
  ActionContext, MutationPayload, Store as GenericStore, ActionPayload, ActionTree,
} from 'vuex';

type State = {
  appState: typeof appStates[number]
  numberOfClicks: number,
}

type Getters = {
  HAS_BEEN_CLICKED(state: State): boolean
}

type Actions<S = State> = {
  // actionNames['UPDATE_NUMBER_OF_CLICKS'],

  UPDATE_NUMBER_OF_CLICKS(context: ActionContext<S, S>, payload: ActionPayload): Promise<void>;
};

type Mutations<S = State> = {
  UPDATE_NUMBER_OF_CLICKS(state: S, payload: MutationPayload): void;
};

type Store = GenericStore<State>

export {
  appStates,
  actionsName,
  Store,
  Actions,
  State,
  Getters,
  Mutations,
};
