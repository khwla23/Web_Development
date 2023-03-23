In task 4 i learnt the fundamentals of JSX.
here are some of the things worth noting.

JSX is a syntax extension for JavaScript that lets you write HTML-like markup inside a JavaScript file.

1) JSX tags have a tag name, attributes, and children.
2) it is not a necessity to write React. (JSX and React are two separate things. They’re often used together, but you can use them independently of each other. JSX is a syntax extension, while React is a JavaScript library.)
3) JSX makes React mode simpler and more elegant.

DIFFERENCE BETWEEN JSX AND REGULAR HTML

--------------In JavaScript---------------------

return React.createElement('div', null, "Hello")

In JS class is a reserved word so instead of writing

React.createElement('div', {id: 'hello', class: ''dummyclass} , " Hello ")

write

React.createElement('div', {id: 'hello', className: ''dummyclass} , " Hello ")


--------------------In JSX-------------------------

same code will be written as

return ( <div className: "dummyClass" > '<head>' Hello '</head>' </div>);


As shown above
class ==> className,
for ==> htmlFor,
onclick ==> onClick,
tabindex ==> tabIndex
(camelCase property)
------------------------------------------------------------------------------------------------------
Also, note that in components we are importing REACT 
import React from 'react'
but not using it.
The reason is that JSX translates the code into React.creatElement which uses React library.

THE RULES OF JSX
1) Return a single root element :
To return multiple elements from a component, wrap them with a single parent tag. eg. <div></div> or fragment <></>
2) Must Close all tags.
it requires tags to be explicitly closed: self-closing tags like <img> must become <img />
3) camelCase most of the things
JS variable name can not contain dashes or reserved words.
Thus, stoke-width ==> strokeWidth




JavaScript in JSX with Curly Braces

you can use curly braces in your JSX to open a window to JavaScript.
Usually, string attributes are put in single or double quotation marks. But what if you want to dynamically specify text? You could use a value from JavaScript by replacing " and " with { and }.
e.g
return (
    <img
      className="SpiderMan"
      src={Andrew}
      alt={description}
    />
  );

Also,
{
  const name = 'Khwla';
  return (
    <h1> { name }'s To Do List</h1>
  );
}

Moreover, 
You can even pass objects in JSX. Objects are also denoted with curly braces, like { name: "ABC", inventions: 5 }. Therefore, to pass a JS object in JSX, you must wrap the object in another pair of curly braces: 
person ={{ name: "ABC", inventions: 5 }}.


React does not require you to use inline styles (CSS classes work great for most cases). But when you need an inline style, you pass an object to the style attribute:
e.g:
return (
    <ul style={{
      backgroundColor: 'black',
      color: 'pink'
    }}>
      <li>Improve the videophone</li>
      <li>Prepare aeronautics lectures</li>
      <li>Work on the alcohol-fuelled engine</li>
    </ul>
  );

Note that inline CSS properties are written in camelCase.
