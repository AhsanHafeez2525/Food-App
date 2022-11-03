import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'

const ResultsDetail = ({result}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.name}>{result.name}</Text>
      <Image style={styles.image} source={{uri: result.image_url}} />
      <Text>{result.rating} Stars, {result.review_count} Reviews</Text>
    </View>
  )
}


const styles = StyleSheet.create({
    image:{
        width: 250,
        borderRadius: 4,
        height: 120,
        marginBottom: 5,
    },
    name:{
        fontWeight: 'bold',
    },
    container:{
        marginLeft: 15,
    }
})
export default ResultsDetail
