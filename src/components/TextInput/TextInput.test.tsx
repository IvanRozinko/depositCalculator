import TextInput from './TextInput';
import { shallow } from 'enzyme';

describe('<TextInput /> :', () => {
  const sum = 100;
  const handleInputChange = jest.fn();
  
  it('renders correctly', () => {
    const component = shallow(
      <TextInput 
        sum={sum} 
        handleInputChange={handleInputChange} 
      />
    );
    expect(component).toMatchSnapshot();
  })

  it('sum prop be equal to passed prop', () => {
    const component = shallow(
      <TextInput 
        sum={sum} 
        handleInputChange={handleInputChange} 
      />
    );
    expect(component.props().value).toBe(sum);
  })

  it('handleInputChange should be called', () => {
    const component = shallow(
      <TextInput 
        sum={sum} 
        handleInputChange={handleInputChange} 
      />
    );
    component.simulate('change', { target: { value: 'test' } })
    expect(handleInputChange).toBeCalled();
  })
})