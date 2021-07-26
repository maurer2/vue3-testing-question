import { Store as GenericStore } from 'vuex';
import type { Getters } from './getters';

const appStates = ['initial', 'loaded', 'error'] as const;

type ActionsName = keyof typeof appStates

type State = {
  appState: typeof appStates[number]
  numberOfClicks: number,
}

// https://dev.to/3vilarthas/vuex-typescript-m4j
type Store = Omit<GenericStore<State>, 'getters'> & {
  getters: {
    [K in keyof Getters]: ReturnType<Getters[K]>
  }
}

export {
  appStates,
  Store,
  State,
};
