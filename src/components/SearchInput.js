import React, {useState} from 'react';
import {StyleSheet, Text, TextInput, View, Button} from 'react-native';

const SearchInput = ({fetchData}) => {
  const [value, setValue] = useState('');
  return (
    <View style={styles.searchContainer}>
      <TextInput
        onChangeText={text => setValue(text)}
        style={styles.searchInput}
        placeholder={'city'}
        placeholderTextColor="lightblue"></TextInput>
      <Button title="Search" onPress={() => fetchData(value)} />
    </View>
  );
};

const styles = StyleSheet.create({
  searchContainer: {
    flex: 1,

    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  searchInput: {
    flex: 1,
    height: 40,
    borderWidth: 1,
    borderColor: '#abbabb',
    borderRadius: 3,
    color: 'white',
    backgroundColor: '#999',
  },
});
export default SearchInput;
