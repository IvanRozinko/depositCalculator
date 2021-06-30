import InputSlider from "./InputSlider";
import { shallow } from 'enzyme';
import { Slider } from '@material-ui/core';

describe('<InputSlider />:', () => {
  const value = 10;
  const handleChange = jest.fn();
  const label = null;
  const valueDisplay = 'off';
  const sliderOptions = {
    min: 0,
    max: 10,
    'aria-labelledby': 'stringg' 
  }
  const wrapper = shallow(
    <InputSlider 
      value={value}
      handleChange={handleChange}
      label={label}
      valueDisplay={valueDisplay}
      sliderOptions={sliderOptions}
    />
  )

  it('should renders correctly', () => {
    expect(wrapper).toMatchSnapshot();
  })

  it('should call handleChange onChange', () => {
    const event = new Event('onchange')
    const newValue = 12;
    wrapper.find(Slider).simulate('change', event, newValue)
    expect(handleChange).toBeCalledWith(event, newValue);
  }) 
})