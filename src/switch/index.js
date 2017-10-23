import React from 'react';
import cn from 'classnames'
import './switch.css'

const Button = ({
  label,
  className,
  inputClassName,
  ...otherProps
}) => {

  const classes = cn(
    className,
    'switch-container'
  )
  return (
    <div className={classes}>
      {label && <p className="switch-label">{label}</p>}
      <label className="switch">
        <input
          type="checkbox"
          className={inputClassName}
          {...otherProps}
        />
        <span className="slider" />
      </label>
    </div>
  );
};

export default Button;
