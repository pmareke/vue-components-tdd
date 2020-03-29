import FileUploader from '@/components/FileUploader';
import { shallowMount } from '@vue/test-utils';

let wrapper = null;
const files = [
  {
    name: 'Document.pdf',
    size: 3200000
  },
  {
    name: 'Document_".pdf',
    size: 4300000
  }
];
const progress = 50;

beforeEach(() => {
  wrapper = shallowMount(FileUploader, {
    propsData: {
      files,
      progress
    }
  });
});

afterEach(() => {
  wrapper.destroy();
});

describe('FileUploader', () => {
  it('should render the number of files', () => {
    expect().toBe();
    expect(wrapper.find('.title').text()).toBe('Uploading 2 files');
  });
  it('should render to total size', () => {
    expect(wrapper.find('.size').text()).toBe('7.5 MB');
  });
  it('should render the progress bar', () => {
    expect(wrapper.find('.progressbar').attributes('style')).toContain('width: 50%');
  });
});
