import React, {useState} from 'react';
import {View, TextInput} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
const SearchBar = () => {
  const [focus, setFocus] = useState(false);
  const placeholderText = focus === false ? 'Search...' : '';
  return (
    <View style={{paddingVertical: 16, backgroundColor: '#e8eaed'}}>
      <TextInput
        style={{
          fontSize: 16,
          backgroundColor: 'white',
          padding: 16,
          marginHorizontal: 16,
          borderRadius: 32,
        }}
        placeholder={placeholderText}
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
      />
      <View style={{position: 'absolute', top: 32, right: 32}}>
        {focus === false && (
          <AntDesign name="search1" size={24} color="#d8dae3" />
        )}
      </View>
    </View>
  );
};

export default SearchBar;
