import React from 'react'
import './App.css'

function Item({ name, isDone }) {
  let ContentofList = name;
  if (isDone) {
    ContentofList = 
    <del>{name} + " ✅"</del>;
  }
  else{
    ContentofList = name + '❌';
  }
  return (
    <li className="item">
      {ContentofList}
    </li>
  );
}


function App() {
  

  return (
    <>
      <h2>"I am Learning Conditional Rendering"</h2>
      <h1>Khwla's TODO List</h1>
      <ul>
        <Item 
          isDone={true} 
          name="Learn Data Structures and Algorithm" 
        />
        <Item 
          isDone={true} 
          name="Visit Library" 
        />
        <Item 
          isDone={false} 
          name="Do the Parallel programming Assignment" 
        />
        <Item 
          isDone={false} 
          name="Collect Financial Accounting Handouts" 
        />
      </ul>
    </>
  )
}

export default App
