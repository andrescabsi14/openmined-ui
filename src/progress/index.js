// @flow
import React from "react";
import "./index.css";

type Props = {
  percent: number
};

const Progress = ({ percent }: Props) => (
  <div className="progress">
    <span className="marker" style={{ width: percent + "%" }}>
      {percent}%
    </span>
  </div>
);

export default Progress;
