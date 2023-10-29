import { Image, View, Text } from "react-native";
import Styles from "../styles";

const Header = () => {
  return (
    <View style={Styles.headerContainer}>
      <Image
        source={require("../../assets/mp3.png")}
        style={Styles.headerImage}
      />
      <Text style={Styles.headerText}>Ambient Music</Text>
    </View>
  );
};

export default Header;
