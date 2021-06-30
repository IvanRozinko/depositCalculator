import PercentDestination from "./PercentDestination";
import { shallow } from 'enzyme';
import { Button } from '@material-ui/core';

describe('<PercentDestination />:', () => {
  const destination = 'card';
  const handlePercentDestination = jest.fn();

  const wrapper = shallow(
    <PercentDestination 
      destination={destination}
      handlePercentDestination={handlePercentDestination}
    />
  )

  it('should renders correctly', () => {
    expect(wrapper).toMatchSnapshot();
  })

  it('should call handlePercentDestination on click with certain parameter', () => {
    wrapper.find(Button).at(0).simulate('click');
    expect(handlePercentDestination).toBeCalledWith('deposit');
    wrapper.find(Button).at(1).simulate('click');
    expect(handlePercentDestination).toBeCalledWith('card');
  })
})
