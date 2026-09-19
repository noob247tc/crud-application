import { useState } from 'react'
import './App.css'

function App() {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

const addNote = () =>{
  const newNote = {
    id: Date.now(),
    title,
    body
  }
}

  return (
   <>
   <h1> My Note</h1>
   <input placeholder='Title' value ={title} onChange={e => setTitle(e.target.value)}/>
   <textarea placeholder='Write your note...' value = {body} onChange={e => setBody(e.target.value)}></textarea>
   <button>Add Note</button>
   </>
  )
}

export default App
