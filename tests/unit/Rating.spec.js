import { shallowMount } from '@vue/test-utils';
import Rating from '../../src/components/Rating';

let wrapper = null;
const stars = {
  max: 5,
  score: 3
};

beforeEach(() => {
  wrapper = shallowMount(Rating, {
    propsData: {
      stars
    }
  });
});

afterEach(() => {
  wrapper.destroy();
});

describe('Rating', () => {
  it('should render the number of max start', () => {
    expect(wrapper.findAll('.star').length).toBe(5);
  });
  it('should render the 3 of 5 stars fille', () => {
    expect(wrapper.findAll('.filled').length).toBe(3);
  });
});
