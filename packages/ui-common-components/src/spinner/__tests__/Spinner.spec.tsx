import * as React from 'react';
import Spinner from '../Spinner';
import renderer from 'react-test-renderer';

describe('Spinner', () => {
  it('should render correctly', () => {
    const component = renderer.create(<Spinner />);
    expect(component.toJSON()).toMatchSnapshot();
  });
});
