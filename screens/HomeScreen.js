import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  TextInput,
  ScrollView,
  Dimensions,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const { width: screenWidth } = Dimensions.get("window");

export default function HomeScreen() {
  const navigation = useNavigation(); // React Navigation hook for navigation

  return (
    <View style={styles.container}>
      {/* Header Section */}
      <View style={styles.header}>
        <Text style={styles.welcomeText}>Welcome, Cy Kirsten!</Text>
        <TouchableOpacity>
          <Image
            source={require("../assets/profileicon.png")}
            style={styles.profileIcon}
          />
        </TouchableOpacity>
      </View>

      {/* Search and Action Buttons */}
      <View style={styles.searchSection}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search"
          placeholderTextColor="#999"
        />
        <TouchableOpacity style={styles.scanButton}>
          <Text style={styles.scanText}>🔍</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.addButton}>
          <Text style={styles.addText}>Add Items</Text>
        </TouchableOpacity>
      </View>

      {/* Item Grid */}
      <ScrollView contentContainerStyle={styles.itemsGrid}>
        {mockItems.map((item, index) => (
          <View key={index} style={styles.itemCard}>
            <Image source={item.image} style={styles.itemImage} />
            <Text style={styles.itemTitle}>{item.title}</Text>
            <Text style={styles.itemPrice}>₱{item.price}.00</Text>
            <Text style={styles.itemSold}>{item.sold} Sold</Text>
          </View>
        ))}
      </ScrollView>

      <View style={styles.bottomNav}>
      <TouchableOpacity
          style={styles.navItem}
          onPress={() => navigation.navigate("PreferenceScreen")} // Replace with the correct screen name
        >
          <Image
            source={require("../assets/preference.png")} // Replace with your profile icon
            style={styles.navIcon}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.navItem}
          onPress={() => navigation.navigate("MessageScreen")} // Replace with the correct screen name
        >
          <Image
            source={require("../assets/message.png")} // Replace with your profile icon
            style={styles.navIcon}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.navItem}
          onPress={() => navigation.navigate("HomeScreen")} // Replace with the correct screen name
        >
          <Image
            source={require("../assets/home-icon.png")} // Replace with your home icon
            style={styles.navIcon}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.navItem}
          onPress={() => navigation.navigate("ShopScreen")} // Replace with the correct screen name
        >
          <Image
            source={require("../assets/shop-icon.png")} // Replace with your shop icon
            style={styles.navIcon}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.navItem}
          onPress={() => navigation.navigate("HistoryScreen")} // Replace with the correct screen name
        >
          <Image
            source={require("../assets/history.png")} // Replace with your profile icon
            style={styles.navIcon}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}

// Mock Data for Items
const mockItems = [
  {
    image: require("../assets/uniform.png"),
    title: "UBBC-College Uniform",
    price: 650,
    sold: 200,
  },
  {
    image: require("../assets/book.png"),
    title: "Mathematics in Modern World",
    price: 600,
    sold: 200,
  },
  {
    image: require("../assets/seniorhigh.png"),
    title: "Senior High Uniform",
    price: 450,
    sold: 100,
  },
];

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#800000",
  },
  welcomeText: {
    fontSize: 16,
    color: "#FFF",
  },
  profileIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#E6E6E6",
  },
  searchSection: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    backgroundColor: "#FFF8F1",
  },
  searchInput: {
    flex: 1,
    padding: 10,
    backgroundColor: "#EEE",
    borderRadius: 5,
    marginRight: 10,
  },
  scanButton: {
    padding: 10,
    backgroundColor: "#800000",
    borderRadius: 5,
    marginRight: 10,
  },
  scanText: {
    color: "#FFF",
    fontSize: 16,
  },
  addButton: {
    padding: 10,
    backgroundColor: "#FFA500",
    borderRadius: 5,
  },
  addText: {
    color: "#FFF",
    fontSize: 16,
  },
  itemsGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    padding: 10,
  },
  itemCard: {
    width: screenWidth / 2 - 20,
    backgroundColor: "#FFF8F1",
    marginBottom: 20,
    borderRadius: 10,
    padding: 10,
    alignItems: "center",
  },
  itemImage: {
    width: "100%",
    height: 100,
    resizeMode: "contain",
    marginBottom: 10,
  },
  itemTitle: {
    fontSize: 14,
    fontWeight: "bold",
    marginBottom: 5,
  },
  itemPrice: {
    fontSize: 14,
    color: "#800000",
    marginBottom: 5,
  },
  itemSold: {
    fontSize: 12,
    color: "#666",
  },
  bottomNav: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    paddingVertical: 20, // Increase vertical padding to make the nav taller
    backgroundColor: "#FFF",
    borderTopWidth: 1,
    borderTopColor: "#DDD",
  },
  navItem: {
    alignItems: "center",
  },
  navIcon: {
    width: 30,  // Set size for the icons
    height: 30,
    resizeMode: "contain",
    marginBottom: 5, // Space between icon and label
  },
  navLabel: {
    fontSize: 12, // Font size for labels
    color: "#333", // Make the text more visible
  },
});
