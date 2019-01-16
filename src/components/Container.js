import React from "react";
import { View } from "react-native";
import RoundedBorder from "./objects/RoundedBorder";
import SquaredBorder from "./objects/SquaredBorder";
import Layout from "../constants/Layout";

function Container({ width = 1, children, center, dark, round, title }) {
  const componentWidth = Layout.width * width;
  const strokeColor = dark ? "white" : "black";
  const backgroundColor = dark ? "black" : "none";

  return (
    <View style={{ backgroundColor, padding: 2 }}>
      {!!round && <RoundedBorder width={width} dark={dark} />}
      {!round && <SquaredBorder width={width} dark={dark} />}
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
      {!!round && <RoundedBorder width={width} dark={dark} flip />}
      {!round && <SquaredBorder width={width} dark={dark} flip />}
    </View>
  );
}

export default Container;
