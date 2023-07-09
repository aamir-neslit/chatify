import { SafeAreaView } from "react-native";
import React from "react";

const Screen = (props) => {
  return (
    <SafeAreaView
      style={{
        backgroundColor: props.starter ? "#37286b" : "#FFFFFF",
        flex: 1,
      }}>
      {props.children}
    </SafeAreaView>
  );
};

export { Screen };
