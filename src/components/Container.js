import React from "react";
import { View } from "react-native";
import { Font } from "expo";
import RoundedBorder from "./objects/RoundedBorder";
import SquaredBorder from "./objects/SquaredBorder";
import Layout from "../constants/Layout";

class Container extends React.PureComponent {
  state = { fontLoaded: false };

  componentDidMount = async () => {
    await Font.loadAsync({
      "press-start-2p": require("../../assets/fonts/PressStart2P-Regular.ttf")
    });

    this.setState({ fontLoaded: true });
  };

  render() {
    const { width = 1, children, center, dark, round, title } = this.props;
    const { fontLoaded } = this.state;

    const componentWidth = Layout.width * width;
    const strokeColor = dark ? "white" : "black";
    const backgroundColor = dark ? "black" : "none";

    const newChildren = React.Children.map(children, child => {
      return React.cloneElement(child, {
        style: { color: strokeColor, fontFamily: "press-start-2p" }
      });
    });

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
          {fontLoaded ? newChildren : children}
        </View>
        {!!round && <RoundedBorder width={width} dark={dark} flip />}
        {!round && <SquaredBorder width={width} dark={dark} flip />}
      </View>
    );
  }
}

export default Container;
