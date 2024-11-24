import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  Alert,
} from "react-native";

export default function LoginRegister({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (email === "student1@ub.edu.ph" && password === "student123") {
      Alert.alert("Login Successful", "Welcome Student!", [
        {
          text: "OK",
          onPress: () => navigation.navigate("Home", { role: "student" }),
        },
      ]);
    } else if (email === "admin1@ub.edu.ph" && password === "admin123") {
      Alert.alert("Login Successful", "Welcome Admin!", [
        {
          text: "OK",
          onPress: () => navigation.navigate("Home", { role: "admin" }),
        },
      ]);
    } else {
      Alert.alert("Login Failed", "Invalid email or password.");
    }
  };

  const handleAdminLogin = () => {
    navigation.navigate("Home", { role: "admin" });
  };

  const handleStaffLogin = () => {
    navigation.navigate("Home", { role: "staff" });
  };

  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/logo.png")}
        style={styles.logo}
      />
      <Text style={styles.title}>Welcome to UB SHOPPE</Text>
      <Text style={styles.subtitle}>Log in to continue</Text>
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        style={styles.input}
      />
      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        style={styles.input}
      />
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>LOGIN</Text>
      </TouchableOpacity>
      <View style={styles.roleButtonsContainer}>
        <TouchableOpacity
          style={[styles.roleButton, styles.adminButton]}
          onPress={handleAdminLogin}
        >
          <Text style={styles.buttonText}>Login as Admin</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.roleButton, styles.staffButton]}
          onPress={handleStaffLogin}
        >
          <Text style={styles.buttonText}>Login as Staff</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  logo: {
    width: 200,
    height: 200,
    resizeMode: "contain",
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#800000",
    marginBottom: 10,
    textAlign: "center",
  },
  subtitle: {
    fontSize: 16,
    color: "#555",
    marginBottom: 20,
    textAlign: "center",
  },
  input: {
    width: "100%",
    padding: 10,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 5,
    marginBottom: 15,
  },
  button: {
    backgroundColor: "#FFAA33",
    paddingVertical: 15,
    paddingHorizontal: 25,
    marginBottom: 10,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
    textTransform: "uppercase",
  },
  adminButton: {
    backgroundColor: "#FFAA33",
    borderRadius: 10,
  },
  staffButton: {
    backgroundColor: "#FFAA33",
    borderRadius: 10,
  },
  roleButtonsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    marginTop: 20,
    paddingHorizontal: 10,
  },
  roleButton: {
    backgroundColor: "#FFAA33",
    padding: 10,
    width: "45%",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 0,
  },
});
