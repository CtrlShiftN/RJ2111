import Enzyme, { shallow } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import App from './App';

// coonfig Enzyme
Enzyme.configure({ adapter: new Adapter() })
// mo ta cac test case
describe('Test case for App', () => {
  // test case
  it('should render the button', () => {
    // test component nao
    const wrapper = shallow(<App />);
    // tim kiem phan tu trong do, giong nhu getElementById, querySelector
    const buttonElement = wrapper.find('#clickBtn');
    // test cac lenh
    expect(buttonElement).toHaveLength(1);
    expect(buttonElement.text()).toEqual('Click me');
  })
})
