import React from 'react'
import { StyleSheet, TextInput, View} from 'react-native'
import {Feather} from '@expo/vector-icons';
const SearchBar = ({term, onTermChange, onTermSubmit}) => {
  return (
    <>
    <View style={styles.backgroundStyle}>
      <Feather name="search" style={styles.iconStyle}/>
      <TextInput
       autoCapitalize='none'
       autoCorrect={false} 
       placeholder='Search'
       style={styles.inputStyle}
       value={term}
       onChangeText={onTermChange}
       onEndEditing={onTermSubmit}
       />
    </View>
    </>
  )
};


const styles = StyleSheet.create({
    backgroundStyle:{
        backgroundColor: '#E5E4E2',
        marginTop: 10,
        height: 50,
        marginHorizontal: 15,
        borderRadius: 5,
        flexDirection: 'row',
        marginBottom: 2
    },
    inputStyle:{
        borderColor: 'black',
        width: 1,
        flex: 1,
        fontSize: 18,
    },
    iconStyle:{
        fontSize: 35,
        alignSelf: 'center',
        marginHorizontal: 15,

    }
})
export default SearchBar
