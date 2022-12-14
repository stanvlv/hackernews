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
      <form className="form-group mx-sm-5 mb-2 row" onSubmit={(e) => {e.preventDefault(); setQuery(`query=${inputSearch}`)}}>
       <div className="col-3"></div>
       <div className="col-4">
        <input className="form-control" placeholder='Search' type='text' onChange={(e) => { setInputSearch(e.target.value)}} />
       </div>
       <div className="col-2">
        <button className="col-10 btn btn-primary mb-2" >Search</button>
        </div>
      </form>
    </div>
  )
}
