import React from "react";
import { Svg } from "expo";

import Layout from "../../constants/Layout";

const { Path } = Svg;

export default function SquaredBorder({ width = 1, flip = false, dark }) {
  const componentWidth = Layout.width * width;
  const middleMaxWidth = 400 * width;

  const pathTop = `M2 14 V2 M0 2 H${middleMaxWidth} M${middleMaxWidth -
    2} 2 V14`;
  const pathBottom = `M2 0 V12 M0 12 H${middleMaxWidth} M${middleMaxWidth -
    2} 12 V0`;

  return (
    <Svg height={14} width={componentWidth}>
      <Path
        d={flip ? pathBottom : pathTop}
        fill="none"
        stroke={dark ? "white" : "black"}
        strokeWidth={4}
      />
    </Svg>
  );
}
