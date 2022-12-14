export default function MainNews({data}) {

   

    

    return (

        <ul>
        {   data?.map((item) => {
                return (
                    <li className='story' key={item.objectID} >
                    <p id='firstP'><b>{item.title}</b> (<a href={item.url} target="_blank">{item.url}</a>)</p>
                    <p id='secondP'>{item.points} points, by: {item.author} , {item.created_at}, {item.num_comments} comments </p>
        </li>
      )
    })
  }
  </ul>
    )
}