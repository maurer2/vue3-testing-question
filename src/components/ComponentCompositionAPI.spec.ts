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
  });

  it('renders', () => {
    expect(cmp.html()).toContain('Clicked');
  });
});
