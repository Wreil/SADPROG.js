import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Picker,
  Alert,
} from 'react-native';

const AddItemScreen = () => {
  const [productName, setProductName] = useState('');
  const [productDescription, setProductDescription] = useState('');
  const [category, setCategory] = useState('');
  const [price, setPrice] = useState('');
  const [stock, setStock] = useState('');

  const handleSave = () => {
    Alert.alert('Item Saved', 'Your item has been saved locally.', [{ text: 'OK' }]);
  };

  const handlePublish = () => {
    if (!productName || !productDescription || !category) {
      Alert.alert('Error', 'Please fill in all required fields.', [{ text: 'OK' }]);
      return;
    }
    Alert.alert('Item Published', 'Your item is now live.', [{ text: 'OK' }]);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Add Item</Text>
      <TouchableOpacity style={styles.photoButton}>
        <Text style={styles.photoButtonText}>+ Add Photo</Text>
      </TouchableOpacity>

      <Text style={styles.label}>Product Name*</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter Product Name"
        value={productName}
        onChangeText={setProductName}
        maxLength={100}
      />

      <Text style={styles.label}>Product Description*</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter Product Description"
        value={productDescription}
        onChangeText={setProductDescription}
        maxLength={100}
      />

      <Text style={styles.label}>Category*</Text>
      <Picker
        selectedValue={category}
        onValueChange={(itemValue) => setCategory(itemValue)}
        style={styles.input}>
        <Picker.Item label="Select Category" value="" />
        <Picker.Item label="Electronics" value="electronics" />
        <Picker.Item label="Clothing" value="clothing" />
        <Picker.Item label="Home" value="home" />
      </Picker>

      <Text style={styles.label}>Price</Text>
      <TextInput
        style={styles.input}
        placeholder="Set"
        value={price}
        onChangeText={setPrice}
        keyboardType="numeric"
      />

      <Text style={styles.label}>Stock</Text>
      <TextInput
        style={styles.input}
        placeholder="Set"
        value={stock}
        onChangeText={setStock}
        keyboardType="numeric"
      />

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={handleSave}>
          <Text style={styles.buttonText}>Save</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.publishButton]} onPress={handlePublish}>
          <Text style={styles.buttonText}>Publish</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f7f7f7',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  photoButton: {
    height: 100,
    width: 100,
    backgroundColor: '#d9d9d9',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginBottom: 20,
  },
  photoButtonText: {
    color: '#555',
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
    fontWeight: '500',
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 15,
    paddingHorizontal: 10,
    backgroundColor: '#fff',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    flex: 1,
    marginHorizontal: 5,
    backgroundColor: '#555',
    padding: 10,
    alignItems: 'center',
    borderRadius: 5,
  },
  publishButton: {
    backgroundColor: '#007bff',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default AddItemScreen;
