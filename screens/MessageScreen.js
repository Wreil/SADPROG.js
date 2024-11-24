import React from "react";
import { View, Text, FlatList, Image, StyleSheet } from "react-native";

const MessagesScreen = () => {
  const messages = [
    {
      id: "1",
      senderName: "Carl Patrick Tanzo",
      senderAvatar: "https://path-to-avatar.jpg", // Replace with actual avatar
      messageContent: "reacted haha to your message",
      timestamp: "9:30 pm",
    },
    {
      id: "2",
      senderName: "Cy Kirsten Panopio",
      senderAvatar: "https://path-to-avatar.jpg", // Replace with actual avatar
      messageContent: "You: hello, thanks for the info!",
      timestamp: "7:00 am",
    },
    {
      id: "3",
      senderName: "Daniel Pallilo",
      senderAvatar: "https://path-to-avatar.jpg", // Replace with actual avatar
      messageContent: "Hello Sir, good morning. Do you still...",
      timestamp: "Yesterday",
    },
    {
      id: "4",
      senderName: "UBShoppe",
      senderAvatar: "https://path-to-avatar.jpg", // Replace with actual avatar
      messageContent: "You: Is there an available uniform for JHS?",
      timestamp: "10:00 pm",
    },
    {
      id: "5",
      senderName: "Nina Macarandang",
      senderAvatar: "https://path-to-avatar.jpg", // Replace with actual avatar
      messageContent: "Thanks!",
      timestamp: "10:10 pm",
    },
  ];

  const renderMessageItem = ({ item }) => (
    <View style={styles.messageItem}>
      <Image source={{ uri: item.senderAvatar }} style={styles.avatar} />
      <View style={styles.messageDetails}>
        <Text style={styles.senderName}>{item.senderName}</Text>
        <Text style={styles.messageContent} numberOfLines={1}>
          {item.messageContent}
        </Text>
      </View>
      <Text style={styles.timestamp}>{item.timestamp}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>My Messages</Text>
      <FlatList
        data={messages}
        renderItem={renderMessageItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
    padding: 16,
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
    color: "#333",
  },
  messageItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#E0E0E0",
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 12,
  },
  messageDetails: {
    flex: 1,
  },
  senderName: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
  },
  messageContent: {
    fontSize: 14,
    color: "#666",
    marginTop: 4,
  },
  timestamp: {
    fontSize: 12,
    color: "#999",
  },
});

export default MessagesScreen;
