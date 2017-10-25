// @flow
import * as React from "react";
import cn from "classnames";
import "./index.css";

type Props = HTMLInputElement & {
  label?: React.Node,
  className?: string,
  inputClassName?: string
};

const Switch = ({ label, className, inputClassName, ...otherProps }: Props) => {
  const classes = cn(className, "switch-container");
  return (
    <div className={classes}>
      {label && <p className="switch-label">{label}</p>}
      <label className="switch">
        {/* $FlowFixMe: Unsure why this isn't working */}
        <input type="checkbox" className={inputClassName} {...otherProps} />
        <span className="slider" />
      </label>
    </div>
  );
};

export default Switch;
