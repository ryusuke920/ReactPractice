import React from "react";

export const ToDoList = ({taskList, settaskList}) => {

    const handleCompleted = (id) => {
        /* 取り消し線を追加する */
        settaskList(taskList.map((task) => {
            if (id === task.id) {
                return {
                    ...task,
                    completed: !task.completed
                };
            }
            return task
        }))
    };

    const handleDelete = (id) => {
        /* タスクを削除する */
        settaskList(taskList.filter((task) => task.id !== id));
    }

    return (
        <div className="todolist">
            <div className='todos'>
                {taskList.map((task, index) => (
                    <div className={`todo ${task.completed ? "completed" : ""}`} key={index}>
                        <div className="todoText">
                            <span>
                                {task.text}
                            </span>
                        </div>
                        <div className='icons'>
                            <button onClick={() => handleCompleted(task.id)}>
                                <i className="fas fa-check"></i>
                            </button>
                            <button onClick={() => handleDelete(task.id)}>
                                <i className="fas fa-trash"></i>
                            </button>
                        </div>
                    </div> 
                ))}
            </div>
        </div>
    )
}