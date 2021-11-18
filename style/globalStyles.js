import { Dimensions, StatusBar, StyleSheet } from "react-native";
import theme from "./theme";

const globalStyles = StyleSheet.create({
  bg: {
    backgroundColor: theme.bg,
  },
  text: {
    color: theme.color,
  },
  container: {
    backgroundColor: theme.bg,
    flex: 0,
    display: "flex",
    flexGrow: 0,
    margin: 0,
    padding: 20,
  },
  height: theme.height,
  // movie Details
  imageCover:{
    width: `100%`,
    height: 450,
  },
});

export default globalStyles;
