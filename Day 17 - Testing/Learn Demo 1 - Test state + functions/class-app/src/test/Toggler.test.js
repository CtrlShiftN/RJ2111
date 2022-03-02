import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import Enzyme, { mount } from 'enzyme';
import Toggler from '../components/Toggler';

Enzyme.configure({ adapter: new Adapter() });
describe('Test toggle with state', () => {
    it('change state', () => {
        // React applications are dynamic. When testing your react components,
        // you often want to test them before and after certain state changes take place.
        // When using mount, any react component instance in the entire render tree could register 
        // code to initiate a state change at any time.
        const wrapper = mount(<Toggler />);
        expect(wrapper.find('#toggleState').text()).toEqual('off');
        // the way you can use class function instead of simulating any click or hover
        wrapper.instance().toggle();
        expect(wrapper.find('#toggleState').text()).toEqual('on');
    })
})