import React from "react";
import { Svg } from "expo";

import Layout from "../../constants/Layout";

const { Path } = Svg;

export default function RoundedBorder({ width = 1, flip = false, dark }) {
  const componentWidth = Layout.width * width;
  const middleMaxWidth = 393 * width - 2;

  const pathTop = `M0 10 H4 M4 6 H8 M8 2 H${middleMaxWidth} M${middleMaxWidth} 6 H${middleMaxWidth +
    4} M${middleMaxWidth + 4} 10 H${middleMaxWidth + 9} `;
  const pathBottom = `M0 2 H4 M4 6 H8 M8 10 H${middleMaxWidth} M${middleMaxWidth} 6 H${middleMaxWidth +
    4} M${middleMaxWidth + 4} 2 H${middleMaxWidth + 9} `;

  return (
    <Svg height={12} width={componentWidth}>
      <Path
        d={flip ? pathBottom : pathTop}
        fill="none"
        stroke={dark ? "white" : "black"}
        strokeWidth={4}
      />
    </Svg>
  );
}
