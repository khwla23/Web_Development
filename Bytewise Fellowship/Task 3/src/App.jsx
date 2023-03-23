
import './App.css'
//Gallery is export default. When you write a default import, you can put any name you want after import.
import Gallery from './Gallery.jsx';
//if gallery would be a named export then "   import {Gallery} from './Gallery';   "

export default function App() {
  return (
    <Gallery />
  );
}


