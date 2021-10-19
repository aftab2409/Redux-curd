import React from 'react'
import{useSelector} from 'react-redux'
function Navbar() {
    const taskObj = useSelector(store => store)
    return (
        <div>
            <h1>Redux-Todolist,Total tasks Remained :{taskObj.taskItem.length} </h1>
        </div>
    )
}

export default Navbar
