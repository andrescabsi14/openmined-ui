// @flow
import React from "react";
import cn from "classnames";
import "./index.css";

type Props = {
  animated?: boolean,
  className?: string
};

const BackgroundGradient = ({ animated, className }: Props) => {
  const classes = cn("background-gradient", { animated }, className);
  return <div className={classes} />;
};

export default BackgroundGradient;
