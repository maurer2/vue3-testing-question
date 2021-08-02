// eslint-disable-next-line import/no-extraneous-dependencies
import { shallowMount } from '@vue/test-utils';
import Component from './component-with-default-usestore-function-unkeyed.vue';

import { storeInitial as storeMock } from '../mocks/store';
import { store as storeReal } from '../store/index';

describe('App', () => {
  let cmp: any;

  beforeEach(() => {
    cmp = shallowMount(Component, {
      global: {
        provide: {
          store: storeMock,
          // store: storeReal,
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
