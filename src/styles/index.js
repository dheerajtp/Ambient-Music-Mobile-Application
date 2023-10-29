const { StyleSheet, StatusBar } = require("react-native");

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginTop: StatusBar.currentHeight || 0,
  },
  cardContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding:10
  },
  card: {
    flex: 1,
    width: 175,
    maxWidth: 180,
    backgroundColor: "#ECE9E6",
    overflow: "hidden",
    borderRadius: 10,
    overflow: "hidden",
    shadowColor: "black",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    marginVertical: 8,
    marginBottom: 16,
    position: "relative", 
  },
  cardImage: {
    width: "100%",
    height: 200,
    resizeMode: "cover",
  },
  cardBody: {
    padding: 8,
  },
  cardTitle: {
    fontSize: 12,
    textTransform: "capitalize",
    fontWeight: "bold",
  },
  cardFooter: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 16,
  },
  headerContainer: {
    marginTop: 8,
    flexDirection: "column",
    alignItems: "center",
    paddingHorizontal: 8,
  },
  headerImage: {
    height: 50,
    width: 50,
    resizeMode: "contain",
  },
  headerText: {
    fontSize: 20,
    fontWeight: "bold",
  },
});

export default Styles;
