import React, {Component} from 'react';

  const Article = (props) => {

    return (
      <div>
        <h1>{props.author}</h1>
        <p>{props.date}</p> 
      </div>

    )

  }


export default Article;