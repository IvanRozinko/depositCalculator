import InfoRow from "./InfoRow";
import { shallow } from 'enzyme';

describe('<InfoRow />:', () => {
  const wrapper = shallow(
    <InfoRow 
      label='label'
      value='value'
    />
  )

  it('should render correctly', () => {
    expect(wrapper).toMatchSnapshot();
  })

  it('should has label and value', () => {
    expect(wrapper.text().includes('label')).toBe(true);
    expect(wrapper.text().includes('value')).toBe(true);
  })
})