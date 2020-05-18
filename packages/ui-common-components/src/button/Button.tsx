import { ButtonPropertiesModel } from './models';
import React from 'react';
import styles from './Button.module.scss';

const Button = (props: ButtonPropertiesModel): React.ReactElement => (
  <>
    <button
      type={props.type || 'button'}
      onClick={props.onClickCallback}
      disabled={props.isDisabled}
      className={`${props.buttonType ? styles[props.buttonType] : ''} ${
        props.isDisabled ? styles.disabled : ''
      } ${styles.button}`}
    >
      {props.textContent}
    </button>
  </>
);

export default Button;
