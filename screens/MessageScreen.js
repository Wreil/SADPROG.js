import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import firestore from '@react-native-firebase/firestore';

const MessagesScreen = () => {
  const [message, setMessage] = useState('');

  const sendMessage = async () => {
    // Reference to 'messages' collection in Firestore
    await firestore()
      .collection('messages')
      .add({
        senderName: 'Cy Kirsten Panopio',
        senderAvatar: 'https://path-to-avatar.jpg',
        messageContent: message,
        timestamp: firestore.FieldValue.serverTimestamp(),
        senderType: 'user',
      });
    setMessage('');
  };

  return (
    <View>
      <Text>Send a Message</Text>
      <TextInput
        value={message}
        onChangeText={setMessage}
        placeholder="Type your message"
      />
      <Button title="Send" onPress={sendMessage} />
    </View>
  );
};

export default MessagesScreen;
