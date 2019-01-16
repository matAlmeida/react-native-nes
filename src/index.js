import React from "react";
import { View, Text } from "react-native";

import Container from "./components/Container";

function App() {
  return (
    <View
      style={{ paddingTop: 25, alignItems: "center", justifyContent: "center" }}
    >
      <Container width={0.9} center>
        <Text style={{ color: "black" }}>
          Good morning. Thou hast had a good night's sleep, I hope
        </Text>
      </Container>
      <Container width={0.9} round>
        <Text style={{ color: "black" }}>
          Good morning. Thou hast had a good night's sleep, I hope
        </Text>
      </Container>
      <Container width={0.9} dark>
        <Text style={{ color: "white" }}>
          Good morning. Thou hast had a good night's sleep, I hope
        </Text>
      </Container>
      <Container width={0.9} dark round>
        <Text style={{ color: "white" }}>
          Good morning. Thou hast had a good night's sleep, I hope
        </Text>
      </Container>
    </View>
  );
}

export default App;
