import React, {useState} from "react";
import { withRouter } from "react-router";

const EntryForm = ({addEntryToJournal, category, history}) => {
  const [entry, setEntry] = useState("")
  console.log(history)

  function onTextChange(event) {
    // console.log(event.target.value)
    setEntry(event.target.value)
  }
  function handleSubmit(event){
    event.preventDefault()
    if (entry && entry.length>0) {
      // console.log("handleSubmit", {category, entry})
      addEntryToJournal({category, entry})
      return history.push("/") //automatic redirected to the homepage
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit} >
        <div>
          <textarea onChange={onTextChange}></textarea>
        </div>
        <input type='submit' value='Make an entry'/>
      </form>
    </div>
  );
};

export default withRouter(EntryForm);
