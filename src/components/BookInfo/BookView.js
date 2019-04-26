import React from 'react';
import { Link } from "react-router-dom";


import myData from '../../data/api.json'

  const bookView = ({match}) => {
  
    let books = []

    myData.books.forEach(( item, i ) => {
      
        if(item.subjects.includes(match.params.id) ){
          return(
            books.push(
              <div key={i}>
                <h2>{item.authors[0].name}</h2>
                <p>{item.title}</p>
              </div>
          ) )
        } 
       
      })

      return(
        <div>
          <h1>Theme: {match.params.id}</h1><hr/>
            {books}
         
          <Link to={`/`}>Back Home</Link>
        </div>
      )
    }
    export default bookView