// eslint-disable-next-line import/no-extraneous-dependencies
import { shallowMount } from '@vue/test-utils';
import ComponentOptionsAPI from './ComponentOptionsAPI.vue';

describe('Component Options Api', () => {
  let cmp: any;

  beforeEach(() => {
    cmp = shallowMount(ComponentOptionsAPI, {});
  });

  afterEach(() => {
    cmp.unmount();
  });

  it('renders', () => {
    expect(cmp.html()).toContain('Clicked');
  });
});
