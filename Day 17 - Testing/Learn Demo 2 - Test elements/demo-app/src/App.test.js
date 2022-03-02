import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import Enzyme, { shallow } from 'enzyme';
import App from './App';

Enzyme.configure({ adapter: new Adapter() });
describe('Test elements', () => {
  it('contains an element', () => {
    // Components
    const wrapper = shallow(<App />);
    // search elements
    const searchElement = wrapper.find('.app-pages');
    // expect results
    expect(searchElement.length).toBe(1)
  })
  it('contains at least an element', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.containsAnyMatchingElements([
      <div className="app-pages"></div>,
      <span> a beautiful world</span>
    ])).toEqual(true);
  })
})