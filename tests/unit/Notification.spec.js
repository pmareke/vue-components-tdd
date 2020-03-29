import AwesomeNotification from '@/components/Notification';
import { shallowMount } from '@vue/test-utils';

let wrapper = null;
const notification = {
  title: 'Danger',
  message: 'Something not ideal might be happening.',
  type: 'alert'
};

beforeEach(() => {
  wrapper = shallowMount(AwesomeNotification, {
    propsData: {
      notification
    }
  });
});

afterEach(() => {
  wrapper.destroy();
});

describe('Notification', () => {
  it('should render the title of the notification', () => {
    expect(wrapper.find('.title').text()).toBe('Danger');
  });
  it('should render the message of the notification', () => {
    expect(wrapper.find('.message').text()).toBe('Something not ideal might be happening.');
  });
  it('should render the message of the notification in red', () => {
    expect(wrapper.contains('.bg-red-500')).toBeTruthy();
  });
});
