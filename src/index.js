import React from "react";
import { View, Text } from "react-native";

import Container from "./components/Container";

function App() {
  return (
    <View
      style={{ paddingTop: 25, alignItems: "center", justifyContent: "center" }}
    >
      <Container width={0.9} center dark>
        <Text style={{ color: "white" }}>Oi</Text>
      </Container>
    </View>
  );
}

export default App;
