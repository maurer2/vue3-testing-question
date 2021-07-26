import { Store as GenericStore } from 'vuex';

const appStates = ['initial', 'loaded', 'error'] as const;

type ActionsName = keyof typeof appStates

type State = {
  appState: typeof appStates[number]
  numberOfClicks: number,
}

type Store = GenericStore<State>

export {
  appStates,
  Store,
  State,
};
