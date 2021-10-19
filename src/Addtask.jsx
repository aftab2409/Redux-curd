import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import{useSelector} from 'react-redux'
function Addtask() {
    const [taskName, settaskName] = useState('')
    const dispatch = useDispatch()
    const taskobj =useSelector(store=>store)
    const addTask = () => {
        dispatch({type:'ADD_TASK' ,payload:taskName})
        console.log(taskobj.taskItem);
    }
    return (
        <div>
            <div className='row justify-content-center'>
                <h1>Add Task component </h1>
                <div className="col-md-6">
                    <input type="text" placeholder="Task Name" value={taskName} className="form-control w-75" style={{ display: 'inline' }} onChange={(e) => settaskName(e.target.value)} />
                    <button className="btn btn-success " onClick={addTask}>Add Task</button>
                    </div>
            </div>
        </div>
    )
}

export default Addtask
