import {useState, useEffect} from 'react';
import yelp from '../api/yelp';

export default ()=>{
    const [results, setResults] = useState ([]);
  const [errorMessage, setErrorMessage] = useState ('');
  
const searchApi = async (seacrhTerm) => {
  try{
  const response = await yelp.get('/search',{
    params:{
      limit: 50,
      term: seacrhTerm,
      location: 'san jose'
    }
  });
  setResults(response.data.businesses);
} catch(err){
  setErrorMessage('Something went wrong')

}
}
// call searchApi when component 
// is first rendered. BAD CODE!
//  searchApi('pasta');
useEffect(() => {
  searchApi('pasta');
}, []);
 return [searchApi, results, errorMessage];
}
