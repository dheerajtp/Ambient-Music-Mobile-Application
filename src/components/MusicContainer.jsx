import { View } from "react-native";
import Styles from "../styles";

const MusicContainer = ({ children }) => {
  return (
    <View contentContainerStyle={Styles.cardContainer}>
      {children}
    </View>
  );
};

export default MusicContainer;
