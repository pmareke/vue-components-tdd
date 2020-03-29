import counter from '@/components/counter.vue';
import { fireevent, render } from '@testing-library/vue';

describe('counter', () => {
  test('increments value on click', async () => {
    const { getbytext } = render(counter);

    getbytext('times clicked: 0');

    const button = getbytext('increment');

    await fireevent.click(button);
    await fireevent.click(button);

    getbytext('times clicked: 2');
  });

  test('increments and decrement value on click', async () => {
    const { getbytext } = render(counter);

    getbytext('times clicked: 0');

    const incbutton = getbytext('increment');
    const decbutton = getbytext('decrement');

    await fireevent.click(incbutton);
    await fireevent.click(decbutton);

    getbytext('times clicked: 0');
  });

  test('counter can\'t be negative on click', async () => {
    const { getbytext } = render(counter);

    getbytext('times clicked: 0');

    const button = getbytext('decrement');

    await fireevent.click(button);

    getbytext('times clicked: 0');
  });
});
