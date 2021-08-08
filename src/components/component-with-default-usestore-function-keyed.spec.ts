// eslint-disable-next-line import/no-extraneous-dependencies
import { shallowMount } from '@vue/test-utils';
import Component from './component-with-default-usestore-function-keyed.vue';

import { storeInitial as storeMock, key } from '../mocks/store';
import { store as storeReal } from '../store/index';

jest.mock('../mocks/store.ts', () => ({
  ...jest.requireActual('../mocks/store.ts'),
  dispatch: jest.fn(),
}));

describe('App', () => {
  let cmp: any;

  beforeEach(() => {
    cmp = shallowMount(Component, {
      global: {
        provide: {
          [key as symbol]: storeMock,
          // [key as symbol]: storeReal,
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

  it('handleClick dispatches click update action', () => {
    // const spiedDispatch = jest.spyOn(storeMock, 'dispatch');
    jest.spyOn(storeMock, 'dispatch');

    cmp.vm.handleClick();

    // expect(spiedDispatch).toHaveBeenCalled();
    expect(storeMock.dispatch).toBeCalled();
  });
});
