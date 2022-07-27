import React, { ReactNode, useCallback } from "react";

interface Props {
  iconName: string;
  marginDir?: "l" | "r" | "t" | "b";
  marginValue?: "0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10";
  extraClassName?: string;
  children?: ReactNode;
  color?: React.CSSProperties["color"];
  styles?: React.CSSProperties;
}

function Icon({ iconName, marginDir, marginValue, extraClassName, color, styles }: Props) {
  const getMarginClassName = useCallback(
    () => (marginDir ? `${marginDir}-${marginValue || "1"}` : ""),
    [marginDir, marginValue]
  );
  const getStyles = useCallback(() => (color ? { color, ...styles } : styles), [color, styles]);

  const finalClassName = `pi pi-${iconName} ${getMarginClassName()} ${extraClassName || ""}`;
  return <i className={finalClassName} style={getStyles()}></i>;
}

export default Icon;
