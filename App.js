import React from 'react';
import {SafeAreaView, View, Text, FlatList, Dimensions} from 'react-native';
import SearchBar from './SearchBar';

const mockData = [
  {id: '1', name: 'abcdf'},
  {id: '2', name: 'bbbbbbb'},
  {id: '3', name: 'bbbbbbb'},
  {id: '4', name: 'bbbbbbb'},
  {id: '5', name: 'bbbbbbb'},
  {id: '6', name: 'bbbbbbb'},
  {id: '7', name: 'bbbbbbb'},
  {id: '8', name: 'bbbbbbb'},
  {id: '9', name: 'bbbbbbb'},
  {id: '10', name: 'bbbbbbb'},
  {id: '11', name: 'cccccc'},
];

const {width, height} = Dimensions.get('window');

const renderHeader = () => {
  return (
    <View style={{margin: 16, padding: 16, backgroundColor: '#43ba6d'}}>
      <Text
        style={{
          fontWeight: 'bold',
          fontSize: 32,
          color: '#f1f7f0',
        }}>
        Header
      </Text>
    </View>
  );
};

const renderItem = ({item, index}) => {
  if (index === 0) {
    return <SearchBar />;
  }
  return (
    <View
      style={{
        backgroundColor: 'white',
        padding: 16,
        margin: 16,
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 4,
        },
        shadowOpacity: 0.2,
        shadowRadius: 3.3,
        borderRadius: 8,
        elevation: 5,
      }}>
      <Text style={{fontSize: 16, color: '#43ba6d'}}>{item.name}</Text>
    </View>
  );
};

const App = () => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#e8eaed'}}>
      <FlatList
        stickyHeaderIndices={[1]}
        ListHeaderComponent={renderHeader}
        contentContainerStyle={{paddingBottom: 32}}
        data={mockData}
        renderItem={renderItem}
      />
    </SafeAreaView>
  );
};

export default App;
