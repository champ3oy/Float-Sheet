import * as React from "react";
import { useState } from "react";
import {
  StyleSheet,
  Animated,
  Dimensions,
} from "react-native";


function FloatSheet({ children, open }) {
  const [animation, setAnimation] = useState(new Animated.Value(0));

  const screenHeight = Dimensions.get("window").height;

  const backdrop = {
    transform: [
      {
        translateY: animation.interpolate({
          inputRange: [0, 0.01],
          outputRange: [screenHeight, 0],
          extrapolate: "clamp",
        }),
      },
    ],
    opacity: animation.interpolate({
      inputRange: [0.01, 0.5],
      outputRange: [0, 1],
      extrapolate: "clamp",
    }),
  };

  open
    ? Animated.timing(animation, {
        toValue: 1,
        duration: 300,
        useNativeDriver: true,
      }).start()
    : Animated.timing(animation, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }).start();

  return (
    <Animated.View style={[StyleSheet.absoluteFill, styles.cover, backdrop]}>
      <Animated.View style={[styles.sheet]}>
        {children}
      </Animated.View>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  cover: {
    backgroundColor: "rgba(0,0,0,.2)",
    padding: 10,
    paddingBottom: 30,
    flexDirection: "column",
    justifyContent: "flex-end",
  },
  sheet: {
    width: "100%",
    height: "auto",
    backgroundColor: "#ffffff",
    borderRadius: 20,
    padding: 20,
  },
});

export default FloatSheet;
