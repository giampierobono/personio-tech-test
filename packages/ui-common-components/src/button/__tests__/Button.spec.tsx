import * as React from 'react';
import Button from '../Button';
import { ButtonTypesEnum } from '../models';
import renderer from 'react-test-renderer';

describe('Button', () => {
  it('should render a base button', () => {
    const component = renderer.create(
      <Button
        buttonType={ButtonTypesEnum.Base}
        textContent={'test'}
        isDisabled={false}
        onClickCallback={() => true}
      />,
    );
    expect(component.toJSON()).toMatchSnapshot();
  });

  it('should render an error button', () => {
    const component = renderer.create(
      <Button
        buttonType={ButtonTypesEnum.Error}
        textContent={'test'}
        isDisabled={false}
        onClickCallback={() => true}
      />,
    );
    expect(component.toJSON()).toMatchSnapshot();
  });

  it('should render a disabled button', () => {
    const component = renderer.create(
      <Button
        buttonType={ButtonTypesEnum.Base}
        textContent={'test'}
        isDisabled={true}
        onClickCallback={() => true}
      />,
    );
    expect(component.toJSON()).toMatchSnapshot();
  });
});
