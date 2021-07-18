// eslint-disable-next-line import/no-extraneous-dependencies
import { shallowMount } from '@vue/test-utils';
import ComponentCompositionAPI from './ComponentCompositionAPI.vue';

describe('Component Composition Api', () => {
  let cmp: any;

  beforeEach(() => {
    cmp = shallowMount(ComponentCompositionAPI, {});
  });

  afterEach(() => {
    cmp.unmount();

    jest.clearAllMocks();
    jest.resetModules();
  });

  it('renders', () => {
    expect(cmp.html()).toContain('Clicked');
  });

  it('button1 triggers counter update function when clicked v2', async () => {
    const spy = jest.spyOn(cmp.vm, 'handleClick1');

    await cmp.find('#button-1').trigger('click');
    expect(spy).toHaveBeenCalled();
  });

  it('button2 triggers counter update function when clicked', async () => {
    const spy = jest.spyOn(cmp.vm, 'handleClick2');

    await cmp.find('#button-2').trigger('click');
    expect(spy).toHaveBeenCalled();
  });

  it('button1 updates counter1', async () => {
    await cmp.find('#button-1').trigger('click');
    expect(cmp.vm.counter1).toBe(1);
  });

  it('button2 updates counter2', async () => {
    await cmp.find('#button-2').trigger('click');
    expect(cmp.vm.counter2).toBe(1);
  });
});
