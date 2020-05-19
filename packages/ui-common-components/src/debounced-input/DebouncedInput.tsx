import React, { ChangeEvent, useEffect, useState } from 'react';
import { DebouncedInputPropertiesModel } from './models';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import styles from './DebounceInput.module.scss';

const DebouncedInput = (props: DebouncedInputPropertiesModel): React.ReactElement => {
  const [value, setValue] = useState(props.defaultValue || '');
  const debounceSubject$ = new Subject();
  debounceSubject$.pipe(debounceTime(300)).subscribe(props.onChangeCallback);

  useEffect(() => {
    if (value.length) {
      debounceSubject$.next(value);
    }
  }, []);

  const onChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setValue(event.target.value);
    debounceSubject$.next(event.target.value);
  };

  return (
    <>
      <label htmlFor={`id-${props.name}`}>{props.label}</label>
      <input
        id={`id-${props.name}`}
        name={props.name}
        type="text"
        value={value}
        className={`${props.disabled ? styles.input + ' ' + styles.disabled : styles.input}`}
        onChange={onChange}
        disabled={props.disabled}
      />
    </>
  );
};

export default DebouncedInput;
