import Select from '@/components/Select';
import { shallowMount } from '@vue/test-utils';

let wrapper = null;
const options = ['Spain', 'UK', 'France', 'Italy'];

beforeEach(() => {
  wrapper = shallowMount(Select, {
    propsData: {
      options
    }
  });
});

afterEach(() => {
  wrapper.destroy();
});

describe('Select', () => {
  it('should render 4 options', () => {
    expect(wrapper.findAll('.option').length).toBe(4);
  });
  it('should render Italy as the last option', () => {
    expect(wrapper.findAll('.option').at(3).text()).toBe('Italy');
  });
});
