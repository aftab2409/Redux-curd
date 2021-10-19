const initialData = {
    taskItem: []
}
const TaskReducer = (state = initialData, action) => {
    switch (action.type) {
        case 'ADD_TASK':return{
            ...state,
            taskItem:[...state.taskItem, action.payload]
        }
        case 'DELETE_TASK':return{
            ...state,
            taskItem:state.taskItem.filter((task)=>task!==action.payload)
        }
        case 'EDIT_TASK':return{
            ...state,
            taskItem:state.taskItem.map((task)=>{
                if (task===action.payload.oldtask)
                task=action.payload.newtask 
                return task
            })
        }
    }
    return state
}
export default TaskReducer;