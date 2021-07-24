import {
  ActionContext, MutationPayload, Store as GenericStore, ActionPayload,
} from 'vuex';

const appStates = ['initial', 'loaded', 'error'] as const;

type State = {
  appState: typeof appStates[number]
  numberOfClicks: number,
}

type Getters = {
  HAS_BEEN_CLICKED(state: State): boolean
}

type Mutations<S = State> = {
  UPDATE_NUMBER_OF_CLICKS(state: S, payload: MutationPayload): void;
};

type Actions<S = State> = {
  UPDATE_NUMBER_OF_CLICKS(context: ActionContext<S, S>, payload: ActionPayload): Promise<void>;
};

type Store = GenericStore<State>

export {
  appStates,
  Store,
  Actions,
  State,
  Getters,
  Mutations,
};
