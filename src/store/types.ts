import { ActionContext, ActionTree, MutationPayload } from 'vuex';
import { InjectionKey } from 'vue';

const appStates = ['initial', 'loaded', 'error'] as const;

type State = {
  appState: typeof appStates[number]
  numberOfClicks: number,
}

type Getters = {
  HAS_BEEN_CLICKED(state: State): boolean
}

type Mutations<S = State> = {
  INCREMENT_NUMBER_OF_CLICKS(state: S, payload: MutationPayload): void;
  DECREMENT_NUMBER_OF_CLICKS(state: S, payload: MutationPayload): void;
};

type Actions<S = State> = {
  UPDATE_NUMBER_OF_CLICKS(context: ActionContext<S, S>): void;
};

type Store = {
  state: State,
  getters: Getters,
  mutations: Mutations,
  actions: Actions

};

export {
  appStates,
  Store,
  Actions,
  State,
  Getters,
  Mutations,
};
