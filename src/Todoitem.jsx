import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
export default function Todoitem({ task }) {
    const dispatch = useDispatch()
    const delteTask = (task) => {
        dispatch({ type: 'DELETE_TASK', payload: task })
    }
    const [show, setshow] = useState("none")

    const edittask = () => {
        setshow('inline')
    }

    const [newtask, setNewtask] = useState('')

    const finaledit = (task) => {
        dispatch({type:'EDIT_TASK',payload:{oldtask:task,newtask:newtask}})
        setshow('none')
    }
    return (
        <div>
            <div className="row mt-2 m-2">
                <div className="col-md-8">
                    <h1>{task}</h1>
                </div>

                <div className="col-md-1 pt-2 ">
                    <button className='btn btn-primary' onClick={edittask}>Edit</button>
                </div>
                <div className="col-md-1 pt-2 ">
                    <button className='btn btn-danger' onClick={() => delteTask(task)}>Delete</button>
                </div>
                <div>
                    <input type="text" className="w-75 ml-2" style={{ display: show }} onChange={(e) => setNewtask(e.target.value)} />
                    <button className="btn btn-primary ml-2" style={{ display: show }} onClick={() => finaledit(task)}>Edit Task</button>
                </div>
            </div>
        </div>
    )
}
