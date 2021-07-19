// eslint-disable-next-line import/no-extraneous-dependencies
import { shallowMount } from '@vue/test-utils';
import ComponentOptionsAPI from './ComponentOptionsAPI.vue';

describe('Component Options Api', () => {
  let cmp: any;
  let spyHandleClick1: any;
  let spyRunOnMount: any;

  beforeEach(() => {
    spyHandleClick1 = jest.spyOn((ComponentOptionsAPI.methods as any), 'handleClick1');
    spyRunOnMount = jest.spyOn((ComponentOptionsAPI.methods as any), 'runOnMount');

    cmp = shallowMount(ComponentOptionsAPI, {});
  });

  afterEach(() => {
    cmp.unmount();

    jest.clearAllMocks();
    jest.resetModules();

    spyHandleClick1.mockClear();
  });

  it('renders', () => {
    expect(cmp.html()).toContain('Options API');
  });

  it('matches snapshot', () => {
    // https://github.com/eddyerburgh/jest-serializer-vue/issues/49
    // eslint-disable-next-line no-underscore-dangle
    expect(cmp.__app._container).toMatchSnapshot();
  });

  it('button1 triggers counter update function when clicked - spied before mount', async () => {
    await cmp.find('#button-2a').trigger('click');

    expect(spyHandleClick1).toHaveBeenCalled();
  });

  it('button1 triggers counter update function when clicked - spied on the fly', async () => {
    const spy = jest.spyOn(cmp.vm, 'handleClick1');

    await cmp.find('#button-2a').trigger('click');
    expect(spy).toHaveBeenCalled();
  });

  it('button2 triggers counter update function when clicked', async () => {
    const spy = jest.spyOn(cmp.vm, 'handleClick2');

    await cmp.find('#button-2b').trigger('click');
    expect(spy).toHaveBeenCalled();
  });

  it('button1 updates counter1', async () => {
    await cmp.find('#button-2a').trigger('click');
    expect(cmp.vm.counter1).toBe(1);
  });

  it('button2 updates counter2', async () => {
    await cmp.find('#button-2b').trigger('click');
    expect(cmp.vm.counter2).toBe(1);
  });

  it('runOnMount runs on mount', async () => {
    expect(spyRunOnMount).toHaveBeenCalled();
  });
});
