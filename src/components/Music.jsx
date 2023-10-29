import { useState } from "react";
import { View, Image, Text, TouchableOpacity } from "react-native";
import Styles from "../styles";
import { Audio } from "expo-av";
import { AntDesign } from "@expo/vector-icons";

const Music = ({ image = "", title = "", item }) => {

  const [values, setValues] = useState({
    playing: false,
    sound: null,
  });

  

  const playSound = async () => {
    if (values.sound) {
      await values.sound.pauseAsync();
      setValues((prev) => ({
        ...prev,
        playing: false,
        sound: null,
      }));
    } else {
      const { sound } = await Audio.Sound.createAsync(
        { uri: item.src },
        { isLooping: true }
      );
      setValues((prev) => ({
        ...prev,
        playing: true,
        sound,
      }));
      await sound.playAsync();
    }
  };

  return (
    <View style={[Styles.card, { height: "auto" }]}>
      <Image
        source={{
          uri: image,
        }}
        style={Styles.cardImage}
      />
      <View style={Styles.cardBody}>
        <Text style={Styles.cardTitle}>{title}</Text>
      </View>
      <View style={Styles.cardFooter}>
        <TouchableOpacity onPress={playSound} style={Styles.playButton}>
          {values.sound ? (
            <AntDesign name="pausecircleo" size={24} color="black" />
          ) : (
            <AntDesign name="playcircleo" size={24} color="black" />
          )}
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Music;
