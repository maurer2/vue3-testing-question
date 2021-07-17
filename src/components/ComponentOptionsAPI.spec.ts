// eslint-disable-next-line import/no-extraneous-dependencies
import { shallowMount } from '@vue/test-utils';
import ComponentOptionsAPI from './ComponentOptionsAPI.vue';

describe('Component Options Api', () => {
  let cmp: any;
  const spyHandleClick1 = jest.spyOn((ComponentOptionsAPI.methods as any), 'handleClick1');

  beforeEach(() => {
    cmp = shallowMount(ComponentOptionsAPI, {});
  });

  afterEach(() => {
    cmp.unmount();

    jest.clearAllMocks();
    jest.resetModules();
  });

  it('renders', () => {
    expect(cmp.html()).toContain('Clicked');
  });

  it('button1 triggers counter update function when clicked', async () => {
    await cmp.find('#button-1').trigger('click');

    expect(spyHandleClick1).toHaveBeenCalled();
  });

  it('button1 triggers counter update function when clicked v2', async () => {
    jest.spyOn(cmp.vm, 'handleClick1');

    await cmp.find('#button-1').trigger('click');

    expect(cmp.vm.handleClick1).toHaveBeenCalled();
  });

  it('button2 triggers counter update function when clicked', async () => {
    jest.spyOn(cmp.vm, 'handleClick2');

    await cmp.find('#button-2').trigger('click');
    expect(cmp.vm.handleClick2).toHaveBeenCalled();
  });
});
