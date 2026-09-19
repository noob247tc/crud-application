import { useState } from 'react'
import './App.css'

function App() {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [notes, setNotes] = useState([]);

const addNote = () =>{
  const newNote = {
    id: Date.now(),
    title,
    body
  }

  setNotes([...notes, newNote])
  setTitle('')
  setBody('')
}
  return (
   <>
   <h1> My Note</h1>
   <input placeholder='Title' value ={title} onChange={e => setTitle(e.target.value)}/>
   <textarea placeholder='Write your note...' value = {body} onChange={e => setBody(e.target.value)}></textarea>
   <button onClick={addNote}>Add Note</button>
   <div>
    {notes.map(note =>(
      <div key={note.id}>
        <h3>{note.title}</h3>
        <p>{note.body}</p>
      </div>
      )
    )}
   </div>
   </>
  )
}

export default App
