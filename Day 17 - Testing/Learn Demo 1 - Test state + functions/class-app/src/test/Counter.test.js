import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import Enzyme, { shallow, mount } from 'enzyme';
import Counter from '../components/Counter';

Enzyme.configure({ adapter: new Adapter() });
describe('test counter', () => {
    it('should update after simulate click', () => {
        const wrapper = shallow(<Counter />);
        wrapper.find('.count').text(); // => "Count: 0"
        wrapper.find('.inc').simulate('click');
        wrapper.find('.count').text(); // => "Count: 1"
        wrapper.find('.inc').simulate('click');
        wrapper.find('.count').text(); // => "Count: 2"
        wrapper.find('.dec').simulate('click');
        wrapper.find('.count').text(); // => "Count: 1"
    })
    it('should update when you use class function', () => {
        const wrapper = shallow(<Counter />);
        wrapper.find('.count').text(); // => "Count: 0"
        wrapper.instance().increment();
        wrapper.update(); // update state if you use shallow instead of mount
        wrapper.find('.count').text(); // => "Count: 1"
        wrapper.instance().increment();
        wrapper.update();
        wrapper.find('.count').text(); // => "Count: 2"
        wrapper.instance().decrement();
        wrapper.update();
        wrapper.find('.count').text(); // => "Count: 1"
    })
    it('should return any ref', ()=>{
        const wrapper = mount(<Counter />);
        expect(wrapper.ref('anyRef')).toBeInstanceOf(Element);
    })
})
