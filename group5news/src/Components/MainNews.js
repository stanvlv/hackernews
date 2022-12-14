import ReactPaginate from 'react-paginate';
import React, {useState, useEffect} from 'react'
export default function MainNews({data}) {

   //Start of pagination:
   const [itemOffset, setItemOffset] = useState(0);
   const itemsPerPage = 6;
   const endOffset = itemOffset + itemsPerPage;
   const currentItems = data.slice(itemOffset, endOffset);
   const pageCount = Math.ceil(data.length / itemsPerPage);
 
   const handlePageClick = (event) => {
     const newOffset = (event.selected * itemsPerPage) % data.length;
  
     setItemOffset(newOffset);
   };
   

    return (
<div>
        <ul>
        {   currentItems?.map((item) => {
                return (
                    <li className='story' key={item.objectID} >
                    <p id='firstP'><b>{item.title}</b> (<a href={item.url} target="_blank">{item.url}</a>)</p>
                    <p id='secondP'>{item.points} points, by: {item.author} , {item.created_at}, {item.num_comments} comments </p>
        </li>
      )
    })
  }
  </ul>
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

  </div>
  
    )
}