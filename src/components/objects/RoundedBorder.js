import React from "react";
import { Svg } from "expo";

import Layout from "../../constants/Layout";

const { Path } = Svg;

export default function RoundedBorder({ width = 1, flip = false, dark }) {
  const componentWidth = Layout.width * width;
  const middleMaxWidth = 393 * width - 4;

  const pathTop = `M0 12 H4 M4 8 H8 M8 4 H${middleMaxWidth} M${middleMaxWidth} 8 H${middleMaxWidth +
    4} M${middleMaxWidth + 4} 12 H${middleMaxWidth + 8} `;
  const pathBottom = `M0 2 H4 M4 6 H8 M8 10 H${middleMaxWidth} M${middleMaxWidth} 6 H${middleMaxWidth +
    4} M${middleMaxWidth + 4} 2 H${middleMaxWidth + 8} `;

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
