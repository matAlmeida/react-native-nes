import React from "react";
import { View } from "react-native";
import RoundedBorder from "./objects/RoundedBorder";
import Layout from "../constants/Layout";

function Container({ width = 1, children, center, dark }) {
  const componentWidth = Layout.width * width;
  const strokeColor = dark ? "white" : "black";
  const backgroundColor = dark ? "black" : "none";

  return (
    <View style={{ backgroundColor }}>
      <RoundedBorder width={width} dark={dark} />
      <View
        style={{
          margin: 0,
          padding: 0,
          width: componentWidth,
          borderLeftWidth: 4,
          borderRightWidth: 4,
          borderColor: strokeColor,
          paddingHorizontal: 14,
          alignItems: center && "center"
        }}
      >
        {children}
      </View>
      <RoundedBorder width={width} dark={dark} flip />
    </View>
  );
}

export default Container;
