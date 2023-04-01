import React from 'react';


function ListItem({ name }) {
  return (
    <li>
      {name}
    </li>
  );
}



function List({ items }) {
  return (
    <ul>
      {items.map((item) => (
        <ListItem key={item.id} name={item.name} />
      ))}
    </ul>
  );
}

export default List;
