import { SafeAreaView, View, StatusBar, FlatList, Text } from "react-native";
import Styles from "./src/styles";
import Header from "./src/components/Header";
import MusicContainer from "./src/components/MusicContainer";
import Music from "./src/components/Music";
const songs = require("./src/constants/song.json");

const App = () => {
  return (
    <SafeAreaView style={Styles.container}>
      <StatusBar />
      <Header />
      <MusicContainer>
        <View style={{ flex: 1}}>
          <FlatList
            data={songs}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <Music
                image={item.image}
                title={item.title}
                src={item.src}
                item={item}
              />
            )}
            ListFooterComponent={<View style={{ height: 16 }} />}
            style={{ marginBottom: 0 }}
          />
        </View>
      </MusicContainer>
    </SafeAreaView>
  );
};

export default App;
