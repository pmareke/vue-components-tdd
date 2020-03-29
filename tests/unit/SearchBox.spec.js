import SearchBox from '@/components/SearchBox';
import { shallowMount } from '@vue/test-utils';

let wrapper = null;

beforeEach(() => {
  wrapper = shallowMount(SearchBox, {
    propsData: {
      placeholder: 'What are you looking for?'
    }
  });
});

afterEach(() => {
  wrapper.destroy();
});

describe('SearchBox', () => {
  it('should render the placeholder', () => {
    expect(wrapper.find('input').attributes('placeholder')).toBe('What are you looking for?');
  });
});
