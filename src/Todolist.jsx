import React from 'react'
import { useSelector } from 'react-redux'
import Todoitem from './Todoitem'
export default function Todolist() {
    const taskobj = useSelector(store => store)

    const taskitems = taskobj.taskItem.map((task) => {
        return (
            <Todoitem task={task} />
        )
    })

    return (
        <div>
            <div className="row justify-content-center">
                <div className="col-md-6">
                    {taskitems}
                </div>
            </div>

        </div>
    )
}
