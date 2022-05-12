import React from "react";

interface ISpacer {
  height: string;
}

export const Spacer: React.FC<ISpacer> = (props) => {
  return <div style={{ height: props.height, width: "100%" }} />;
};
