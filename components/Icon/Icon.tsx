import React, { ReactNode, useCallback } from "react";
import { classNames } from "primereact/utils";

export interface IconProps {
  iconName: string;
  marginDir?: "l" | "r" | "t" | "b" | "both";
  marginValue?: "0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10";
  extraClassName?: string;
  children?: ReactNode;
  color?: React.CSSProperties["color"];
  styles?: React.CSSProperties;
}

function Icon({ iconName, marginDir, marginValue, extraClassName, color, styles }: IconProps) {
  const getStyles = useCallback(() => (color ? { color, ...styles } : styles), [color, styles]);
  const isBothMargin = marginDir == "both";
  const finalClassName = classNames(
    "pi",
    {
      [`pi-${iconName}`]: iconName,
      [`m${marginDir}-${marginValue || "1"}`]: marginDir && !isBothMargin,
      [`mrl-${marginValue}`]: isBothMargin,
    },
    extraClassName
  );
  return <i className={finalClassName} style={getStyles()}></i>;
}

export default Icon;
