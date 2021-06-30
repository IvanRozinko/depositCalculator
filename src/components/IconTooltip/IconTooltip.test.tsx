import IconTooltip from "./IconTooltip";
import { shallow } from 'enzyme';
import { Tooltip } from '@material-ui/core';
import Help from '@material-ui/icons/HelpOutline';

describe('<IconTooltip /> :', () => {
  const wrapper = shallow(
    <IconTooltip />
  )
  it('should render correctly', () => {
    expect(wrapper).toMatchSnapshot();
  })

  it('should shows up on icon click', () => {
    wrapper.find(Help).simulate('click');
    expect(wrapper.find(Tooltip).props().open).toBe(true)
  })
})
