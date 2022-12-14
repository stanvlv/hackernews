import React, {useState} from 'react'
import Main from './Main'
import axios from 'axios'

export default function Footer({setQuery}) {
  //this useState takes the value from the input and we use it to put it into the search link API
    const [inputSearch, setInputSearch] = useState('')
  

    // const onSubmit = (e) => {
    //   e.preventDefault();

    //   axios
    //   .get(`http://hn.algolia.com/api/v1/search?query=${inputSearch}`)
    //   .then((response) => { setQuery(response.data.hits)})
    //   .catch((error) => { console.log(error)})
    // }

  return (
    <div>
      {/* Here on submit we use the setQuery from Main to replace the link with the input value */}
      <form onSubmit={(e) => {e.preventDefault(); setQuery(`query=${inputSearch}`)}}>
        <input placeholder='Search' type='text' onChange={(e) => { setInputSearch(e.target.value)}} />
        <button>Search</button>
      </form>
    </div>
  )
}
