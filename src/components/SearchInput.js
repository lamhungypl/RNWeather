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
        placeholderTextColor="lightblue"
        onSubmitEditing={() => fetchData(value)}
      />
      {/* <Button title="Search" onPress={() => fetchData(value)} /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  searchContainer: {
    flex: 1,
    marginLeft: 20,
    marginRight: 20,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  searchInput: {
    flex: 1,
    height: 60,
    borderWidth: 1,
    borderColor: '#abbabb',
    borderRadius: 3,
    color: 'white',
    backgroundColor: '#999',
  },
});
export default SearchInput;
