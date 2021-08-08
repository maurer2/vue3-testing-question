// eslint-disable-next-line import/no-extraneous-dependencies
import { shallowMount } from '@vue/test-utils';
import { nanoid } from 'nanoid';
import Component from './component-with-default-usestore-function-keyed.vue';

import { storeInitial as storeMock, key } from '../mocks/store';
import { store as storeReal } from '../store/index';

jest.mock('nanoid', () => ({
  nanoid: jest.fn().mockReturnValue('button-keyed'),
}));

jest.mock('../mocks/store.ts', () => ({
  ...jest.requireActual('../mocks/store.ts'),
  // dispatch: jest.fn(),
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

    jest.spyOn(cmp.vm, 'handleClick');
    jest.spyOn(storeMock, 'dispatch');
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

  it('button is correctly wired up with handleClick', async () => {
    expect(cmp.find('#id-button-keyed').exists()).toBe(true);

    await cmp.find('#id-button-keyed').trigger('click');
    expect(cmp.vm.handleClick).toHaveBeenCalled();
  });

  it('handleClick dispatches click update action', () => {
    // const spiedDispatch = jest.spyOn(storeMock, 'dispatch');
    cmp.vm.handleClick();

    // expect(spiedDispatch).toHaveBeenCalled();
    expect(storeMock.dispatch).toHaveBeenCalledWith('UPDATE_NUMBER_OF_CLICKS');
  });

  it('dispatches action updates the store', async () => {
    expect(storeMock.state.numberOfClicks).toBe(0);

    cmp.vm.handleClick();
    await expect(storeMock.dispatch).toHaveBeenCalledWith('UPDATE_NUMBER_OF_CLICKS');

    expect(storeMock.state).toBe(true);
  });
});
