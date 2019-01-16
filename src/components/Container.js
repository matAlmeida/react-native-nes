import React from "react";
import { View, Dimensions } from "react-native";
import { Svg } from "expo";
const { Path } = Svg;

function Container({ width = 1, children, center, dark }) {
  const displayWidth = Dimensions.get("window").width;
  const maxWidth = 393;
  const finalWidth = maxWidth * width - 4;

  const pathTop = `M0 12 H4 M4 8 H8 M8 4 H${finalWidth} M${finalWidth} 8 H${finalWidth +
    4} M${finalWidth + 4} 12 H${finalWidth + 8} `;
  const pathBottom = `M0 2 H4 M4 6 H8 M8 10 H${finalWidth} M${finalWidth} 6 H${finalWidth +
    4} M${finalWidth + 4} 2 H${finalWidth + 8} `;

  const strokeColor = dark ? "white" : "black";
  const backgroundColor = dark ? "black" : "none";

  return (
    <View style={{ backgroundColor }}>
      <Svg height="14" width={displayWidth * width}>
        <Path d={pathTop} fill="none" stroke={strokeColor} strokeWidth={4} />
      </Svg>
      <View
        style={{
          margin: 0,
          padding: 0,
          width: displayWidth * width,
          borderLeftWidth: 4,
          borderRightWidth: 4,
          borderColor: strokeColor,
          paddingHorizontal: 14,
          alignItems: center && "center"
        }}
      >
        {children}
      </View>
      <Svg height="14" width={displayWidth * width}>
        <Path d={pathBottom} fill="none" stroke={strokeColor} strokeWidth={4} />
      </Svg>
    </View>
  );
}

export default Container;
