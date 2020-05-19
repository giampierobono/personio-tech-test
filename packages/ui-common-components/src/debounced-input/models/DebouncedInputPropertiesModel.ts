export interface DebouncedInputPropertiesModel {
  name: string;
  label: string;
  defaultValue?: string;
  placeHolder: string;
  onChangeCallback: (newValue: string) => void;
}
