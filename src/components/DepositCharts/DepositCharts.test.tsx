import DepositCharts from "./DepositCharts";
import { shallow } from 'enzyme';
import { Button } from '@material-ui/core';

describe('<DepositChats />', () => {
  const wrapper = shallow(
    <DepositCharts />
  )

  it('should renders correctly', () => {
    expect(wrapper).toMatchSnapshot();
  })

  it('should show alert on start Deposit', () => {
    global.alert = jest.fn();
    wrapper.find(Button).simulate('click');
    expect(window.alert).toBeCalled();
  })
})