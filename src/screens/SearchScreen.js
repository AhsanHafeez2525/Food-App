import React,{useState}from 'react'
import { Text, ScrollView, View} from 'react-native'
import SearchBar from '../components/SearchBar';
import useResults from '../hooks/useResults';
import ResultsList from '../components/ResultsList';
const SearchScreen = ({navigation}) => {
  const [term, setTerm] = useState ('');
  const [searchApi, results, errorMessage] = useResults();

  const filterResultsByPrice = (price)=>{
    // price === '$' || '$$' || '$$$'
    return results.filter(result =>{
      return result.price === price;
    })
  };
  

  return (
    <>
    <View style={{flex: 1}}>
      <SearchBar 
      term={term} 
      onTermChange={setTerm}
      onTermSubmit={()=>searchApi(term)}
    
      />
      {errorMessage ? <Text>{errorMessage}</Text> : null }
      <ScrollView>
      <ResultsList 
      results={filterResultsByPrice('$')} 
      title="Cost Effective" 
      navigation={navigation}
      />
      <ResultsList    
       results={filterResultsByPrice('$$')} title="Bit Pricier"
      navigation={navigation}

       />
      <ResultsList 
      results={filterResultsByPrice('$$$')} title="Big Spender"
      navigation={navigation}

      />
      </ScrollView>
    </View>
    </>
  )
};

export default SearchScreen