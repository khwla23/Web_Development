In Task 3, i have learnt about the basis of Reactjs.
It is a popular JavaScript libraries for mobile and web application development. ReactJS is not a JavaScript framework, 
Because it’s only responsible for rendering the components of an application’s view layer. 

Features of React:
a) Component and Pops: it divides the UI into components. React components work similarly to JavaScript functions as they accept arbitrary inputs called properties or props.

b) State Management: A state is a JavaScript object that represents a part of a component. It changes whenever a user interacts with the application, rendering a new UI to reflect the modifications. State management refers to the practice of managing React application states.

c) JSX: Developers employ it to embed HTML code in JavaScript objects. The ReactDOM.render() function renders the React element on the Document Object Model (DOM) tree. 

d) Virtual DOM: DOM presents a web page in a data tree structure. Whenever there’s a change in data, ReactJS will generate a new Virtual DOM tree and compare it with the previous one to find the quickest possible way to implement changes in the real DOM. This process is known as diffing. Takes less time and uses fewer resources.

e) Programmatic Navigation: Programmatic navigation refers to instances when lines of code create an action that redirects a user. Login and signup actions, for instance, programmatically navigate users to new pages. Using a Redirect component is the primary method of programmatic navigation with history.push() being another approach.
In short, the React Router package synchronizes the UI with the URL, giving you control over the look of React applications without depending on links.

Differences and Similarities Between ReactJs and React Native
React Native is the Framework built on the React library.
+ Both use component-based architecture. 
- ReactJs for web and React native for building UI of a mobile app.
- ReactJs uses virtual Dom mean HTML for its basis, whilst react native uses native apis.
- ReactJs use CSs and native use Stylesheet.

Why use?
1) Easy to use
2) Reusable Java components
3) Easier component writing.
4) Higher Performance
5) SEO friendly.

Hundreds of major companies worldwide, such as Netflix, Airbnb, and American Express.

React is written using JSX instead of standard JavaScript to simplify components and keep code clean.


REACT COMPONENTS:
--> React lets you combine your markup, CSS, and JavaScript into custom “components”, reusable UI elements for your app.
--> React components are regular JavaScript functions, but their names must start with a capital letter or they won’t work!
--> Components can render other components, but you must never nest their definitions.
