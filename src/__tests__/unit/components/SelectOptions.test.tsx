import { render, screen } from '@testing-library/react';
import SelectOptions from '../../../components/SelectOptions';
const mockedHandleChange = jest.fn();
describe("SelectOptions", () => {
  it('should display SelectOptions info', () => {
    render(
      <SelectOptions 
        currentValue={''} 
        handleChange={mockedHandleChange} 
        options={["white", "blue"]} 
        label={'color'} 
        placeholder={'All car colors'} 
      />
    );
    expect(screen.getByText('color')).toBeInTheDocument();
    expect(screen.getByText('All car colors')).toBeInTheDocument();
    expect(screen.getByRole('button')).toBeTruthy();
  });
});


