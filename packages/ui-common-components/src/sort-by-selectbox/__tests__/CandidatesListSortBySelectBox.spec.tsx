import * as React from 'react';
import { CandidatesListSortBySelectBox } from '../';
import renderer from 'react-test-renderer';

describe('CandidatesListSortBySelectBox', () => {
  it('should render an enable select box', () => {
    const component = renderer.create(
      <CandidatesListSortBySelectBox onChangeCallback={() => true} disabled={false} />,
    );
    expect(component.toJSON()).toMatchSnapshot();
  });

  it('should render a disabled select box', () => {
    const component = renderer.create(
      <CandidatesListSortBySelectBox onChangeCallback={() => true} disabled={true} />,
    );
    expect(component.toJSON()).toMatchSnapshot();
  });
});
