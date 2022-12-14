import React, {useState, useEffect} from 'react'

import axios from 'axios';
import MainNews from './MainNews';
import Footer from './Footer'
export default function Main() {

  // this query is the last part of the APi link which is default with the home page
  // and on change we use it in Footer so it takes the searched value and pastes
  // the api with searched
  const [query, setQuery] = useState('tags=front_page');
    const [data, setData] = useState([]);



    //here we get API with useState at the end because we change it with our search from Footer
    useEffect(() => {
      axios.get(`http://hn.algolia.com/api/v1/search?${query}`)
      .then(response => setData(response.data.hits))
      .catch(error => alert("Sorry! :( We have an error: " + error))
    }, [query])

 
    console.log(data)

  return (
    <div>
     <MainNews data={data}  />
     {/* here we make possible to use the setquery in the footer so we can change it there
     with the search value */}
     <Footer setQuery={setQuery} />
       </div>
  )
}

