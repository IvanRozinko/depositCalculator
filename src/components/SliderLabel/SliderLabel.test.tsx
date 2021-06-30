import SliderLabel from './SliderLabel';
import { shallow } from 'enzyme';

describe('<SliderLabel /> :', () => {
  const label = 'Slider';
  const wrapper = shallow(
    <SliderLabel label={label} />
  )
  
  it('renders correctly', () => {
    expect(wrapper).toMatchSnapshot();
  })

  it('label should be displayed', () => {
    expect(wrapper.text()).toBe(label);
  })
})