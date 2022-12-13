import React, {useState, useEffect} from 'react'

import axios from 'axios';


export default function Main() {

  const [query, setQuery] = useState('tags=front_page');
    const [data, setData] = useState([]);




    useEffect(() => {
      axios.get(`http://hn.algolia.com/api/v1/search/?${query}`)
      .then(response => setData(response.data.hits))
      .catch(error => console.log(error))
    }, [query])

 

  console.log(data)
  return (
    <div>
      {
        data?.map((item) => {
          return (
            <div className='story'>
              <p id='firstP'><b>{item.title}</b> (<a>{item.url}</a>)</p>
              <p id='secondP'>{item.points} points, by: {item.author} , {item.created_at}, {item.num_comments} comments </p>
              

            </div>
          )
        })
      }

       </div>
  )
}

