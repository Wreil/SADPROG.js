import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";

export default function UbshoppeScreen() {
  const [showFrontScreen, setShowFrontScreen] = useState(true);

  return (
    <SafeAreaView style={styles.container}>
      {showFrontScreen && (
        <View style={styles.frontScreenContainer}>
          <Image source={require("../assets/logo.png")} style={styles.logo} />
          <Text style={styles.frontScreenText}>
            Elevate your shopping experience 
          </Text>
          <Text style={styles.frontScreenText}>
             with UB SHOPPE
          </Text>
          <Text style={styles.captionText}>
            “Where every purchase is a smart choice
          </Text>
          <Text style={styles.captionText}>
            and every deal feels like a victory”
          </Text>
        </View>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5", // Light grey background
  },
  frontScreenContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 30,
    backgroundColor: "#fff",
  },
  logo: {
    width: 250,
    height: 250,
    marginBottom: 20,
  },
  frontScreenText: {
    fontSize: 18,
    fontWeight: "bold",
    fontStyle: "italic",
    color: "#FFAA33",
    marginBottom: 15,
    width: '100%',
  },
  captionText: {
    color: "black",
    fontSize: 14,
    textAlign: "center",
    marginBottom: 5,
  },
});
