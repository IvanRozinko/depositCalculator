import DepositCalc from "./DepositCalc";
import { shallow } from 'enzyme';

describe('<DepositCalc /> :', () => {
  const wrapper = shallow(
    <DepositCalc />
  )

  it('should renders correctly', () => {
    expect(wrapper).toMatchSnapshot()
  })
})