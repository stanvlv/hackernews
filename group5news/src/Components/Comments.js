import React, {useState, useEffect} from 'react'
import axios from 'axios';
import Footer from './Footer'
import ReactPaginate from 'react-paginate';




export default function Comments() {

  // this query is the last part of the APi link which is default with the home page
  // and on change we use it in Footer so it takes the searched value and pastes
  // the api with searched
  const [query, setQuery] = useState('tags=front_page');
    const [data, setData] = useState([]);



    //here we get API with useState at the end because we change it with our search from Footer
    useEffect(() => {
      axios.get(`http://hn.algolia.com/api/v1/search_by_date?tags=comment&numericFilters=created_at_i>02-02-2022${query}`)
      .then(response => setData(response.data.hits))
      .catch(error => alert("Sorry! :( We have an error: " + error))
    }, [query])

 
    console.log(data)

   //Start of pagination:
   const [itemOffset, setItemOffset] = useState(0);
   const itemsPerPage = 8;
   const endOffset = itemOffset + itemsPerPage;
   const currentItems = data.slice(itemOffset, endOffset);
   const pageCount = Math.ceil(data.length / itemsPerPage);
 
   const handlePageClick = (event) => {
     const newOffset = (event.selected * itemsPerPage) % data.length;
  
     setItemOffset(newOffset);
   };
   

    return (
<div>
        <ol className='Box'>
         {currentItems.map((item) => {
                return (
                  <div>
                    
                    <li className='story' key={item.objectID} >
                    <p id='firstP'><b>{item.story_title}</b></p>
                    <p id='secondP'>{item.comment_text}, | by: {item.author} , | published at {item.created_at.substring(0, 10)}, | {item.created_at.substring(11, 19)} </p>
                            
        </li>
        </div>
      )
    })
  }
  </ol>
  {currentItems.length === 0 && (<img src='https://media0.giphy.com/media/6uGhT1O4sxpi8/giphy.gif?cid=ecf05e4744k3yfbkgzegtnm69usfrjjws3htt6ilf6bxg29j&rid=giphy.gif&ct=g' />)}
  
  <ReactPaginate
          breakLabel="..."
          nextLabel="next >"
          onPageChange={handlePageClick}
          pageRangeDisplayed={3}
          pageCount={pageCount}
          previousLabel="< previous"
          renderOnZeroPageCount={null}
          containerClassName="pagination"
          pageLinkClassName='page-num'
          previousLinkClassName='page-num'
          nextLinkClassName='page-num'
          activeLinkClassName='active'
        />
<Footer setQuery={setQuery} />
  </div>
  
    )}