import ReactPaginate from 'react-paginate';
import React, {useState, useEffect} from 'react'
export default function MainNews({data}) {

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
         ({currentItems.map((item) => {
                return (
                  <div>
                    
                    <li className='story' key={item.objectID} >
                    <p id='firstP'><b>{item.title}</b> (<a href={item.url} target="_blank">{item.url}</a>)</p>
                    <p id='secondP'>{item.points} points, by: {item.author} , {item.created_at}, {item.num_comments} comments </p>
                            
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

  </div>
  
    )
}