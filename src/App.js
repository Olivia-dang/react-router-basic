import React, {useState} from 'react'
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'
import Home from './components/Home'
import CategorySelection from './components/CategorySelection'
import NewEntry from './components/NewEntry'
import NotFound from './components/NotFound'


const App = () => {
  const defaultCategories = ["Food", "Coding", "Other"]
  const[categories, setCategories] = useState(defaultCategories)
  const [entries, setEntries] = useState([]) 
      //we use an array here to keep a copy of existing data, just add new value to it

  //whenever dealing with an array or object, never update state directly, always take a copy
  function addEntryToJournal(newEntry) {
    const updatedEntries = [...entries, newEntry]
      //(...) Spread syntax can be used when all elements from an object or array need to be included in a list of some kind. 
      //insert new item at the end
    setEntries(updatedEntries)
  }

  return (
    <div >
      {/* Router tag at root level */}
      <Router> 
        <ul>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/category'>Category Selection</Link></li>
          <li><Link to='/entry/new/:id'>New Entry</Link></li>
        </ul>
        
        <Switch>
          <Route exact path='/' render={(props) => <Home {...props} entries={entries} /> } />
          <Route path='/category' render={(props) => <CategorySelection {...props} categories={categories}/>} />
          <Route path='/entry/new/:id' render={(props) => <NewEntry {...props} categories={categories} addEntryToJournal={addEntryToJournal}/>} />
          <Route component={NotFound}/>
        </Switch>
      </Router>
    </div>
  )
}
export default App
