import React, { useState } from 'react';
import List from './List';
import AddItemForm from './AddItemForm';
import { v4 as uuidv4 } from 'uuid';
import "./App.css"

function App() {
  const [items, setItems] = useState([
    { id: uuidv4(), name: 'Learn Data Structures' },
    { id: uuidv4(), name: 'C Language' },
    { id: uuidv4(), name: 'Assignment of Financial Accounting' },
  ]);

  const handleAddItem = (name) => {
    const newItem = { id: uuidv4(), name };
    setItems([...items, newItem]);
  };

  const handleRemoveItem = (itemId) => {
    setItems(items.filter((item) => item.id !== itemId));
  };

  return (
    <div>
      <h1>To Do's List</h1>
      <List items={items}/>
      <br/>
      <AddItemForm onAddItem={handleAddItem} />
    </div>
  );
}

export default App;
