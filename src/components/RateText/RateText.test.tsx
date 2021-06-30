import RateText from "./RateText";
import { shallow } from 'enzyme';

describe('<RateText /> :', () => {
  const rate = '10';

  const component = shallow(
    <RateText rate={rate} />
  )

  it('should renders correctly', () => {
    expect(component).toMatchSnapshot();
  })

  it('should display correct prop', () => {
    expect(component.text()).toBe(rate);
  })
})