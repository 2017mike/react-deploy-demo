import React from 'react';

// TODO: Create a `name` variable

// TODO: Create a `thoughts` variable
// This should be a string regarding what you think of React

function JSXVariables({name, age}) {
  return (
    <div className="main-container">
      <div className="container">
        <div className="jumbotron">

          {/* TODO: Add your name variable */}
          <h1>Hi! My name is {name}</h1>
          <h1> I'm {age} years old</h1>
          {/* TODO: Add your number of letters variable */}
          <h2>My name has (insert number of letters in name here) letters</h2>
          {/* TODO: Add your thoughts variable */}
          <h2>I think React (insert thoughts about React here)</h2>
        </div>
      </div>
    </div>
  );
}

export default JSXVariables;
