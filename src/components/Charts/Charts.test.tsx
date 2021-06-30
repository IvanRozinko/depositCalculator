import Charts from './Charts';
import { shallow } from 'enzyme';

describe('<Chats /> :', () => {
  const defaultProps = {
    sum: 100,
    monthlyTotal: 300,
    profit: 20
  }

  const wrapper = shallow(
    <Charts {...defaultProps} />
  )

  it('should render correctly', () => {
    expect(wrapper).toMatchSnapshot();
  })
})