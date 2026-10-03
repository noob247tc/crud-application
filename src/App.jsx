import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [notes, setNotes] = useState([]);
  const [editingId, setEditingId] = useState(null);

const startEdit =(note)=>{
  setEditingId(note.id)
  setTitle(note.title)
  setBody(note.body)
}  

const addNote = () =>{

if(title ==="" || body ===""){
  return alert("Title and Body cannot be empty");
}
if(editingId){
  setNotes(notes.map(note => note.id === editingId? {...note , title, body}: note));
  setEditingId(null);
}else{
    const newNote = {
    id: Date.now(),
    title,
    body
  }
  setNotes([...notes, newNote])
}
  
  setTitle('')
  setBody('')
}

const deleteNote = (id) => {
  const updatedNotes = notes.filter(note => note.id !== id);
  setNotes(updatedNotes);
}

useEffect(() => {
  const savedNotes = localStorage.getItem('notes');
  if (savedNotes) {
    setNotes(JSON.parse(savedNotes));
  }
}, [])

useEffect(() => {
  localStorage.setItem('notes', JSON.stringify(notes))
}, [notes])


  return (
   <>
   <h1> My Note</h1>
   <input placeholder='Title' value ={title} onChange={e => setTitle(e.target.value)}/>
   <textarea placeholder='Write your note...' value = {body} onChange={e => setBody(e.target.value)}></textarea>
   <button onClick={addNote}>{editingId ? 'Update' : 'Add Note'}</button>
   <div>
   
    {notes.map(note => (
      <div key={note.id}>
        <h3>{note.title}</h3>
        <p>{note.body}</p>
        <button onClick={()=> deleteNote(note.id)}>Delete</button>
        <button onClick={() => startEdit(note)}>Edit</button>
      </div>
    ))}
   </div>
   </>
  )
}

export default App
