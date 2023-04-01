import React, { useState } from 'react';

function AddItemForm(props) {
  const [itemName, setItemName] = useState('');

  const handleChange = (event) => {
    setItemName(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.onAddItem(itemName);
    setItemName('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={itemName} onChange={handleChange} />
      <button type="submit">Add Item</button>
    </form>
  );
}

export default AddItemForm;
