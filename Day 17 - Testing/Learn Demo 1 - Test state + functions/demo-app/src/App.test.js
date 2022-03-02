import { render, screen } from '@testing-library/react';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import Enzyme, { shallow } from 'enzyme';
import App from './App';

Enzyme.configure({ adapter: new Adapter() });
describe('test a state', () => {
  it('should be zero', () => {
    // which component to be test
    const wrapper = shallow(<App />);
    // search a element
    const zeroText = wrapper.find("#counterVal");
    // check
    expect(zeroText.text()).toEqual("0");
  })
  it('should be one after increasing', () => {
    // which component to be test
    const wrapper = shallow(<App />);
    // find increase button
    const increaseBtn = wrapper.find("#increaseBtn");
    increaseBtn.simulate('click');
    // search a element
    const zeroText = wrapper.find("#counterVal");
    // check
    expect(zeroText.text()).toEqual("1");
  })
  it('should be negative after increasing', () => {
    // which component to be test
    const wrapper = shallow(<App />);
    // find increase button
    const decreaseBtn = wrapper.find("#decreaseBtn");
    decreaseBtn.simulate('click');
    // search a element
    const zeroText = wrapper.find("#counterVal");
    // check
    expect(zeroText.text()).toEqual("0");
  })
});
