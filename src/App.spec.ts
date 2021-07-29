// eslint-disable-next-line import/no-extraneous-dependencies
import { shallowMount } from '@vue/test-utils';
import AppComponent from './App.vue';

import { storeInitial, keyedStore } from './mocks/store';

describe('App', () => {
  let cmp: any;

  beforeEach(() => {
    cmp = shallowMount(AppComponent, {
      global: {
        provide: {
          store: keyedStore,
        },
      },
    });
  });

  afterEach(() => {
    cmp.unmount();

    jest.clearAllMocks();
    jest.resetModules();
  });

  it('renders', () => {
    expect(cmp.html()).toContain('Click');
  });

  it('matches snapshot', () => {
    // https://github.com/eddyerburgh/jest-serializer-vue/issues/49
    // eslint-disable-next-line no-underscore-dangle
    expect(cmp.__app._container).toMatchSnapshot();
  });
});
