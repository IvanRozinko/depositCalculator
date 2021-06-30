import ProfitDetails from "./ProfitDetails";
import { shallow } from 'enzyme';
import { Box, Collapse } from '@material-ui/core';

describe('<ProfitDetails /> :', () => {
  const pureProfit = '100';
  const purePercent = 6.7;
  const wrapper = shallow(
    <ProfitDetails
      purePercent={purePercent}
      pureProfit={pureProfit}
    />
  )

  it('should render correctly', () => {
    expect(wrapper).toMatchSnapshot();
  })

  it('should not be expanded', () => {
    expect(wrapper.find(Collapse).props().in).toBe(false)
  })

  it('should be expanded on click', () => {
   wrapper.find(Box).at(1).simulate('click');
   expect(wrapper.find(Collapse).props().in).toBe(true);
  })
  
  it('should has 2 Inforow', () => {
    expect(wrapper.find('InfoRow').length).toBe(2)
  })
})