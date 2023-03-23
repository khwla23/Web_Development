import './App.css'
const person = {
    name: 'Walter Elias Disney',
    theme: {
      backgroundColor: 'black',
      color: 'pink'
    },
    image: "https://d23.com/app/uploads/2013/04/1180-x-600-About-Walt-Disney.jpg"
  };
  
  export default function TodoList() {
    return (
      <div style={person.theme}>
        <h1>{person.name}'s Todos</h1>
        <img
          className="avatar"
          src={person.image}
          alt={person.name}
        />
        <ul>
          <li>creator of Mickey Mouse</li>
          <li>founder of Disneyland and Walt Disney World</li>
          <li>the first cartoons with synchronized sound</li>
          <li>the first full-length animated feature film</li>
        </ul>
      </div>
    );
  }