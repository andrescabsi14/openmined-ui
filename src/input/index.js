// @flow
import React from "react";
import cn from "classnames";
import "./index.css";

type Props = HTMLInputElement;

const Button = ({ className, ...otherProps }: Props) => {
  const classes = cn(className);
  // $FlowFixMe: Unsure why this isn't working
  return <input className={classes} {...otherProps} />;
};

export default Button;
