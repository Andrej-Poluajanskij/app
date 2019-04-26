import React, { Component } from 'react';
import { Link } from "react-router-dom";

import myData from '../../data/api.json'

export default class HomePage extends Component{
  constructor(){
    super()
    this.state = {books: {}, subjectLink: []}
  }
  componentDidMount (){
    
    this.setState({
      subjectLink: myData.subjects.map(( item, i ) =>{
        return (
          <li key={i}>
            <Link  to={`/${item}`} >{item} </Link>
          </li>
        )
      })
    })
  }

 
  render(){
      
        return(
            <div>
                <h1>Please choose subject</h1>
                <ul>
                  {this.state.subjectLink}
                </ul>
               
            </div>
        )
     }
    }
