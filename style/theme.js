import { Dimensions } from "react-native";

const theme = {
  bg: "#111111",
  height: Dimensions.get("window").width < 560 ? 400 : 750,
  color: "#f5f6ff",
};

export default theme;
