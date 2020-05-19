export interface DebouncedInputPropertiesModel {
  name: string;
  label: string;
  defaultValue?: string;
  placeHolder: string;
  disabled: boolean;
  onChangeCallback: (newValue: string) => void;
}
