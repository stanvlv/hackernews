import React, {useState, useEffect} from 'react'

import axios from 'axios';


export default function Main() {


    const [data, setData] = useState([]);

    useEffect(() => {
      axios.get('http://hn.algolia.com/api/v1/search?tags=front_page')
      .then(response => setData(response.data.hits))
      .catch(error => console.log(error))
    }, [])
  console.log(data)
  return (
    <div>
      {
        data?.map((data) => {
          return (
            <div>
              <h3>{data.title}</h3>
              ({data.url})
            </div>
          )
        })
      }

       </div>
  )
}

