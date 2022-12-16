import axios from 'axios'
import {useState} from 'react'




export default function PostComments ({post, number}) {
    
const [isClicked, setIsClicked] = useState(false)
const [comments, setComments] = useState([])


const onClick = () => {
 if (isClicked) return setIsClicked(false)

 axios.get(`https://hn.algolia.com/api/v1/search?query=${post}&tags=comment`)
 .then((response) => {
   setIsClicked(true)
   setComments(response.data.hits)  
 }).catch((error) => alert(error))
}

    return (
        <div>
            
<p>{number} <button className="cmnt-btn" onClick={onClick}>{" "} {isClicked ? "Hide" : ""}comments{" "} </button> </p>
                            <div className={isClicked ? 'comments' : 'comments hidden'}>
                              {comments.map((comment) => {
                                return (
                                  <div className='comment' key={comment.objectID}>
                                    
                                    <p className="comment-author">{comment.author}</p>
                                    <p className="comment-comment">{comment.comment_text}</p>
                                  </div>
                                )
                              })}
                            </div>

                            </div>
    )

}

