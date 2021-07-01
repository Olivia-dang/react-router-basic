import React, {useState, useEffect} from "react" 
import EntryForm from './EntryForm'

const NewEntry = ({match, categories, addEntryToJournal}) => {
        // console.log(match) => we can access the URL id {...params: {id: "0", path: "/entry/new/:id", url: "/entry/new/0"}...}
        // console.log(categories) => ["Food", "Coding", "Other"]
    const selectedCategory = match.params ? match.params.id : -1
    const category = categories[selectedCategory]
        // console.log(category) => check if we have the right result
    const [errorMsg, setErrorMsg] = useState(null)

    // we need to useEffect to control re-render, only when input change, does the setErrorMsg work
    // or else it falls to an infinite loop
    useEffect(() => {
        category ? setErrorMsg(null) : setErrorMsg("Category not found, please try another link")
    }, [categories, category])

    return (
        <div>
            <h1> New Entry for {category}</h1>
            {errorMsg && <p>{errorMsg}</p>}
            {category && <EntryForm category={category} addEntryToJournal={addEntryToJournal}/>}
        </div>
    )
}
export default NewEntry