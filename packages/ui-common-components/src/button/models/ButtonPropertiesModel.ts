import { ButtonTypesEnum } from './ButtonTypesEnum';

export interface ButtonPropertiesModel {
  buttonType: ButtonTypesEnum;
  textContent: string;
  type?: 'button' | 'submit' | 'reset';
  isDisabled: boolean;
  onClickCallback: () => void;
}
