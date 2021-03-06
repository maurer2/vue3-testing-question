// eslint-disable-next-line import/no-extraneous-dependencies
import { shallowMount } from '@vue/test-utils';
import Component from './component-composition-api.vue';

describe('Component Composition Api', () => {
  let cmp: any;
  let spyRunOnMount: any;

  beforeEach(() => {
    cmp = shallowMount(Component, {});

    spyRunOnMount = jest.spyOn(cmp.vm, 'runOnMount');
  });

  afterEach(() => {
    cmp.unmount();

    jest.clearAllMocks();
    jest.resetModules();
  });

  it('renders', () => {
    expect(cmp.html()).toContain('Composition API');
  });

  it('matches snapshot', () => {
    // https://github.com/eddyerburgh/jest-serializer-vue/issues/49
    // eslint-disable-next-line no-underscore-dangle
    expect(cmp.__app._container).toMatchSnapshot();
  });

  it('button1 triggers counter update function when clicked - should fail - cb without parenthesis', async () => {
    const spy = jest.spyOn(cmp.vm, 'handleClick1');

    await cmp.find('#button-1a').trigger('click');
    expect(spy).toHaveBeenCalled();
  });

  it('button2 triggers counter update function when clicked', async () => {
    const spy = jest.spyOn(cmp.vm, 'handleClick2');

    await cmp.find('#button-1b').trigger('click');
    expect(spy).toHaveBeenCalled();
  });

  it('button1 updates counter1', async () => {
    await cmp.find('#button-1a').trigger('click');
    expect(cmp.vm.counter1).toBe(1);
  });

  it('button2 updates counter2', async () => {
    await cmp.find('#button-1b').trigger('click');
    expect(cmp.vm.counter2).toBe(1);
  });

  it('runOnMount runs on mount - should fail - can\'t set spy before mount', async () => {
    // jest.spyOn(cmp.vm, 'runOnMount');
    expect(spyRunOnMount).toHaveBeenCalled();
  });
});
