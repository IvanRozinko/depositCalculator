import DepositInputs from "./DepositInputs";
import { shallow } from 'enzyme';

describe('<DepositInputs />:', () => {
  const wrapper = shallow(
    <DepositInputs />
  )

  it('should renders correctly', () => {
    expect(wrapper).toMatchSnapshot();
  })
})