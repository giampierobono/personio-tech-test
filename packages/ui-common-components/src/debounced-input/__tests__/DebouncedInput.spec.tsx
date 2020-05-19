import * as React from 'react';
import DebouncedInput from '../DebouncedInput';
import renderer from 'react-test-renderer';

describe('Debounce input', () => {
  it('should render correctly', () => {
    const component = renderer.create(
      <DebouncedInput
        name={'test'}
        label={'test label'}
        placeHolder={'test placeholder'}
        onChangeCallback={(e): void => console.log(e)}
      />,
    );
    expect(component.toJSON()).toMatchSnapshot();
  });
});
