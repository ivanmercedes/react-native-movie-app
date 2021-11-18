import { StyleSheet } from "react-native";
import globalStyles from "../../../style/globalStyles";

const styles = StyleSheet.create({
    title: {
      color: globalStyles.text.color,
      fontWeight: "bold",
      fontSize: 25,
    },
    description: {
      marginTop: 10,
      color: "#838383",
      fontSize: 15,
      fontWeight: "100",
    },
  });

  export default styles;